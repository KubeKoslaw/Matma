package com.example.trygonometria

import android.annotation.SuppressLint
import android.graphics.Color
import android.os.Bundle
import android.view.ViewGroup
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.activity.enableEdgeToEdge
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.webkit.WebViewAssetLoader

class MainActivity : ComponentActivity() {

    private lateinit var webView: WebView

    // Ostatnio policzone insety — ponownie wstrzykiwane po każdym załadowaniu strony
    private var lastInsets: Triple<Int, Int, Int>? = null

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        webView = WebView(this).apply {
            layoutParams = ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
            setBackgroundColor(Color.parseColor("#0a0f1d"))

            settings.apply {
                javaScriptEnabled = true
                domStorageEnabled = true
                databaseEnabled = true
                allowFileAccess = true
                allowContentAccess = true
                useWideViewPort = true
                loadWithOverviewMode = true
                cacheMode = WebSettings.LOAD_DEFAULT
                displayZoomControls = false
                builtInZoomControls = false
                setSupportZoom(false)
            }

            webViewClient = object : WebViewClient() {
                override fun shouldInterceptRequest(
                    view: WebView,
                    request: WebResourceRequest
                ): WebResourceResponse? {
                    return assetLoader.shouldInterceptRequest(request.url)
                }

                override fun onPageFinished(view: WebView, url: String) {
                    // Strona startuje z domyślnymi 0px w CSS — po wczytaniu ponownie applied insety
                    lastInsets?.let { injectInsets(it.first, it.second, it.third) }
                }
            }
            webChromeClient = WebChromeClient()

            // Load from secure local appassets origin, perfectly supporting ES modules
            // Czyszczenie pamięci podręcznej: po aktualizacji APK Chromium mógłby
            // serwować stare moduły ES z poprzedniej instalacji
            clearCache(true)
            loadUrl("https://appassets.androidplatform.net/assets/www/index.html")
        }

        // Insety trafiają do strony jako zmienne CSS (--safe-top/--safe-bottom/--kb-bottom),
        // bo padding na WebView nie przesuwa elementów position:fixed wewnątrz strony.
        // --kb-bottom (klawiatura) jest używane tylko jako dolny margines treści,
        // żeby pola formularzy dało się przewinąć nad klawiaturę.
        ViewCompat.setOnApplyWindowInsetsListener(webView) { _, insets ->
            val barsType = WindowInsetsCompat.Type.systemBars() or
                WindowInsetsCompat.Type.displayCutout()
            val bars = insets.getInsets(barsType)
            val ime = insets.getInsets(WindowInsetsCompat.Type.ime())
            lastInsets = Triple(bars.top, bars.bottom, ime.bottom)
            injectInsets(bars.top, bars.bottom, ime.bottom)
            WindowInsetsCompat.CONSUMED
        }

        setContentView(webView)

        // Handle Android system back button
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (webView.canGoBack()) {
                    webView.goBack()
                } else {
                    isEnabled = false
                    onBackPressedDispatcher.onBackPressed()
                }
            }
        })
    }

    override fun onResume() {
        super.onResume()
        webView.onResume()
    }

    private fun injectInsets(topPx: Int, bottomPx: Int, keyboardPx: Int) {
        if (!::webView.isInitialized) return
        // Insety systemowe są w pikselach fizycznych — CSS oczekuje pikseli logicznych
        val density = webView.resources.displayMetrics.density
        if (density <= 0f) return
        val topCss = Math.round(topPx / density)
        val bottomCss = Math.round(bottomPx / density)
        val kbCss = Math.round(keyboardPx / density)
        val js = buildString {
            append("(function(){var d=document.documentElement;if(!d)return;")
            append("d.style.setProperty('--safe-top','").append(topCss).append("px');")
            append("d.style.setProperty('--safe-bottom','").append(bottomCss).append("px');")
            append("d.style.setProperty('--kb-bottom','").append(kbCss).append("px');")
            append("})();")
        }
        webView.evaluateJavascript(js, null)
    }

    override fun onPause() {
        super.onPause()
        webView.onPause()
    }

    override fun onDestroy() {
        super.onDestroy()
        webView.destroy()
    }
}
