package com.example.trygonometria.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

val AccentPrimary = Color(0xFF3B82F6) // Blue 500
val AccentPrimaryDark = Color(0xFF60A5FA) // Blue 400
val AccentSecondary = Color(0xFF10B981) // Emerald 500
val AccentSecondaryDark = Color(0xFF34D399) // Emerald 400

val DarkBackground = Color(0xFF0F172A) // Slate 900
val DarkSurface = Color(0xFF1E293B) // Slate 800
val DarkSurfaceVariant = Color(0xFF334155) // Slate 700
val DarkOnBackground = Color(0xFFF8FAFC) // Slate 50

val LightBackground = Color(0xFFF8FAFC) // Slate 50
val LightSurface = Color(0xFFFFFFFF)
val LightSurfaceVariant = Color(0xFFE2E8F0) // Slate 200
val LightOnBackground = Color(0xFF0F172A) // Slate 900

private val DarkColorScheme = darkColorScheme(
    primary = AccentPrimaryDark,
    secondary = AccentSecondaryDark,
    background = DarkBackground,
    surface = DarkSurface,
    surfaceVariant = DarkSurfaceVariant,
    onBackground = DarkOnBackground,
    onSurface = DarkOnBackground
)

private val LightColorScheme = lightColorScheme(
    primary = AccentPrimary,
    secondary = AccentSecondary,
    background = LightBackground,
    surface = LightSurface,
    surfaceVariant = LightSurfaceVariant,
    onBackground = LightOnBackground,
    onSurface = LightOnBackground
)

@Composable
fun MatmaTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColorScheme else LightColorScheme

    MaterialTheme(
        colorScheme = colorScheme,
        content = content
    )
}
