package com.example.trygonometria.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.trygonometria.data.Repository
import com.example.trygonometria.data.TableAngleRow

@Composable
fun TableScreen() {
    var searchQuery by remember { mutableStateOf("") }
    var showOnlySpecial by remember { mutableStateOf(false) }

    val fullTable = remember { Repository.generateFullTable() }

    val filteredTable = remember(searchQuery, showOnlySpecial) {
        fullTable.filter { row ->
            if (showOnlySpecial && !row.isSpecial) return@filter false
            if (searchQuery.isNotBlank()) {
                val q = searchQuery.lowercase()
                row.deg.toString().contains(q) ||
                        row.quadrant.lowercase().contains(q) ||
                        row.radLatex.lowercase().contains(q)
            } else true
        }
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Text(
            text = "Tabela wartości 0–360°",
            style = MaterialTheme.typography.headlineMedium,
            color = MaterialTheme.colorScheme.onBackground
        )

        Spacer(modifier = Modifier.height(12.dp))

        OutlinedTextField(
            value = searchQuery,
            onValueChange = { searchQuery = it },
            label = { Text("Szukaj kąta (np. 45, I, π/3)") },
            modifier = Modifier.fillMaxWidth()
        )

        Spacer(modifier = Modifier.height(8.dp))

        Row(
            verticalAlignment = Alignment.CenterVertically
        ) {
            FilterChip(
                selected = showOnlySpecial,
                onClick = { showOnlySpecial = !showOnlySpecial },
                label = { Text("Tylko kąty charakterystyczne") }
            )
        }

        Spacer(modifier = Modifier.height(12.dp))

        LazyColumn(
            verticalArrangement = Arrangement.spacedBy(8.dp),
            modifier = Modifier.fillMaxSize()
        ) {
            items(filteredTable, key = { it.deg }) { row ->
                TableRowCard(row)
            }
        }
    }
}

@Composable
fun TableRowCard(row: TableAngleRow) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = if (row.isSpecial) MaterialTheme.colorScheme.primaryContainer else MaterialTheme.colorScheme.surface
        )
    ) {
        Column(modifier = Modifier.padding(12.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(
                    text = "${row.deg}° (${row.quadrant})",
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.onSurface
                )
                Text(
                    text = row.wierszyk,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
            Spacer(modifier = Modifier.height(6.dp))
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text("sin: ${row.sinLatex}")
                Text("cos: ${row.cosLatex}")
                Text("tg: ${row.tgLatex}")
                Text("ctg: ${row.ctgLatex}")
            }
        }
    }
}
