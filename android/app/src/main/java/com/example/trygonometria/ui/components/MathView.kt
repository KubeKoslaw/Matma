package com.example.trygonometria.ui.components

import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.viewinterop.AndroidView
import androidx.compose.material3.MaterialTheme

@Composable
fun MathView(
    latex: String,
    modifier: Modifier = Modifier,
    isInline: Boolean = false
) {
    val textColor = MaterialTheme.colorScheme.onSurface.toArgb()
    val hexColor = String.format("#%06X", 0xFFFFFF and textColor)

    val htmlContent = """
        <!DOCTYPE html>
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
            <link rel="stylesheet" href="file:///android_asset/www/vendor/katex/katex.min.css">
            <script src="file:///android_asset/www/vendor/katex/katex.min.js"></script>
            <style>
                body {
                    margin: 0;
                    padding: 4px 0;
                    background-color: transparent;
                    color: $hexColor;
                    font-family: sans-serif;
                    display: flex;
                    align-items: center;
                    justify-content: ${if (isInline) "flex-start" else "center"};
                    overflow-x: auto;
                    font-size: 16px;
                }
                .katex { font-size: 1.15em; }
            </style>
        </head>
        <body>
            <div id="math"></div>
            <script>
                try {
                    katex.render(${JSON.stringify(latex)}, document.getElementById('math'), {
                        displayMode: ${!isInline},
                        throwOnError: false
                    });
                } catch (e) {
                    document.getElementById('math').innerText = ${JSON.stringify(latex)};
                }
            </script>
        </body>
        </html>
    """.trimIndent()

    AndroidView(
        factory = { context ->
            WebView(context).apply {
                webViewClient = WebViewClient()
                settings.javaScriptEnabled = true
                settings.allowFileAccess = true
                setBackgroundColor(0x00000000)
            }
        },
        update = { webView ->
            webView.loadDataWithBaseURL("file:///android_asset/", htmlContent, "text/html", "UTF-8", null)
        },
        modifier = modifier
    )
}

private object JSON {
    fun stringify(s: String): String {
        return "\"" + s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n") + "\""
    }
}
