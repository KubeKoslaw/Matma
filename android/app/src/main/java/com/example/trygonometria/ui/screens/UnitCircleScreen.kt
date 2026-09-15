package com.example.trygonometria.ui.screens

import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.trygonometria.data.AngleData
import com.example.trygonometria.data.Repository
import com.example.trygonometria.ui.components.MathView
import kotlin.math.*

@Composable
fun UnitCircleScreen() {
    var angleDeg by remember { mutableStateOf(45.0) }
    val rad = Math.toRadians(angleDeg)

    val sinVal = sin(rad)
    val cosVal = cos(rad)
    val tgVal = if (abs(cosVal) > 1e-4) tan(rad) else null
    val ctgVal = if (abs(sinVal) > 1e-4) 1.0 / tan(rad) else null

    val specialAngle = Repository.angles.find { abs(it.deg - angleDeg) < 0.5 }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Okrąg Trygonometryczny",
            style = MaterialTheme.typography.headlineMedium,
            color = MaterialTheme.colorScheme.onBackground
        )

        Spacer(modifier = Modifier.height(16.dp))

        Box(
            modifier = Modifier
                .size(300.dp)
                .background(MaterialTheme.colorScheme.surface, RoundedCornerShape(16.dp))
                .pointerInput(Unit) {
                    detectDragGestures { change, _ ->
                        val center = Offset(size.width / 2f, size.height / 2f)
                        val touch = change.position
                        val dx = (touch.x - center.x).toDouble()
                        val dy = -(touch.y - center.y).toDouble() // flipped y
                        var calculatedDeg = Math.toDegrees(atan2(dy, dx))
                        if (calculatedDeg < 0) calculatedDeg += 360.0

                        // Snap to special angles (+-3 deg)
                        val nearestSpecial = Repository.angles.find { abs(it.deg - calculatedDeg) <= 3.0 }
                        angleDeg = nearestSpecial?.deg?.toDouble() ?: calculatedDeg
                    }
                },
            contentAlignment = Alignment.Center
        ) {
            val axisColor = MaterialTheme.colorScheme.onSurfaceVariant
            val primaryColor = MaterialTheme.colorScheme.primary
            val secondaryColor = MaterialTheme.colorScheme.secondary

            Canvas(modifier = Modifier.fillMaxSize()) {
                val center = Offset(size.width / 2f, size.height / 2f)
                val radius = size.width * 0.38f

                // Axes
                drawLine(axisColor, Offset(0f, center.y), Offset(size.width, center.y), strokeWidth = 2f)
                drawLine(axisColor, Offset(center.x, 0f), Offset(center.x, size.height), strokeWidth = 2f)

                // Circle
                drawCircle(axisColor, radius = radius, center = center, style = Stroke(width = 3f))

                // Point on circle
                val px = center.x + (radius * cos(rad)).toFloat()
                val py = center.y - (radius * sin(rad)).toFloat()

                // Radius line
                drawLine(primaryColor, center, Offset(px, py), strokeWidth = 6f)

                // Sin line (vertical)
                drawLine(Color(0xFFEF4444), Offset(px, center.y), Offset(px, py), strokeWidth = 5f)

                // Cos line (horizontal)
                drawLine(Color(0xFF3B82F6), center, Offset(px, center.y), strokeWidth = 5f)

                // Point dot
                drawCircle(secondaryColor, radius = 12f, center = Offset(px, py))
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        Card(
            modifier = Modifier.fillMaxWidth(),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
        ) {
            Column(modifier = Modifier.padding(16.dp)) {
                Text(
                    text = "Kąt α = ${angleDeg.toInt()}° (${String.format("%.4f", rad)} rad)",
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.primary
                )
                Spacer(modifier = Modifier.height(8.dp))
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Text("sin α = ${specialAngle?.sinLatex ?: String.format("%.4f", sinVal)}")
                    Text("cos α = ${specialAngle?.cosLatex ?: String.format("%.4f", cosVal)}")
                }
                Spacer(modifier = Modifier.height(4.dp))
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Text("tg α = ${specialAngle?.tgLatex ?: (tgVal?.let { String.format("%.4f", it) } ?: "brak")}")
                    Text("ctg α = ${specialAngle?.ctgLatex ?: (ctgVal?.let { String.format("%.4f", it) } ?: "brak")}")
                }
            }
        }
    }
}
