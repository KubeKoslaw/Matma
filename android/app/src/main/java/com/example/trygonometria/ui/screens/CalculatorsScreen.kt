package com.example.trygonometria.ui.screens

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.unit.dp
import kotlin.math.*

@Composable
fun CalculatorsScreen() {
    var sideA by remember { mutableStateOf("3") }
    var sideB by remember { mutableStateOf("4") }

    val a = sideA.toDoubleOrNull() ?: 0.0
    val b = sideB.toDoubleOrNull() ?: 0.0
    val c = sqrt(a * a + b * b)

    val sinA = if (c > 0) a / c else 0.0
    val cosA = if (c > 0) b / c else 0.0
    val tgA = if (b > 0) a / b else 0.0

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Text(
            text = "Kalkulator Trójkąta Prostokątnego",
            style = MaterialTheme.typography.headlineMedium,
            color = MaterialTheme.colorScheme.onBackground
        )

        Spacer(modifier = Modifier.height(16.dp))

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            OutlinedTextField(
                value = sideA,
                onValueChange = { sideA = it },
                label = { Text("Przyprostokątna a") },
                modifier = Modifier.weight(1f)
            )
            OutlinedTextField(
                value = sideB,
                onValueChange = { sideB = it },
                label = { Text("Przyprostokątna b") },
                modifier = Modifier.weight(1f)
            )
        }

        Spacer(modifier = Modifier.height(16.dp))

        Box(
            modifier = Modifier
                .fillMaxWidth()
                .height(200.dp)
                .background(MaterialTheme.colorScheme.surface, RoundedCornerShape(16.dp)),
            contentAlignment = Alignment.Center
        ) {
            val primaryColor = MaterialTheme.colorScheme.primary
            val axisColor = MaterialTheme.colorScheme.onSurfaceVariant

            Canvas(modifier = Modifier.fillMaxSize().padding(16.dp)) {
                val p1 = Offset(20f, size.height - 20f)
                val p2 = Offset(size.width - 20f, size.height - 20f)
                val p3 = Offset(20f, 20f)

                // Draw triangle
                drawLine(primaryColor, p1, p2, strokeWidth = 5f)
                drawLine(primaryColor, p1, p3, strokeWidth = 5f)
                drawLine(primaryColor, p2, p3, strokeWidth = 5f)
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        Card(
            modifier = Modifier.fillMaxWidth(),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
        ) {
            Column(modifier = Modifier.padding(16.dp)) {
                Text(text = "Przeciwprostokątna c = ${String.format("%.4f", c)}", style = MaterialTheme.typography.titleMedium)
                Spacer(modifier = Modifier.height(8.dp))
                Text(text = "sin α = a/c = ${String.format("%.4f", sinA)}")
                Text(text = "cos α = b/c = ${String.format("%.4f", cosA)}")
                Text(text = "tg α = a/b = ${String.format("%.4f", tgA)}")
            }
        }
    }
}
