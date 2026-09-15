package com.example.trygonometria.ui.screens

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.trygonometria.data.FormulaData
import com.example.trygonometria.data.MaterialTask
import com.example.trygonometria.data.Repository
import com.example.trygonometria.data.TheoryItem
import com.example.trygonometria.ui.components.MathView

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun FormularzIZadaniaScreen() {
    var selectedTab by remember { mutableStateOf(0) }
    var selectedModule by remember { mutableStateOf("trygonometria") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp)
    ) {
        Text(
            text = "Teoria, Wzory i Zadania",
            style = MaterialTheme.typography.headlineMedium,
            color = MaterialTheme.colorScheme.onBackground
        )

        Spacer(modifier = Modifier.height(12.dp))

        ScrollableTabRow(
            selectedTabIndex = when(selectedModule) {
                "trygonometria" -> 0
                "geometria-analityczna" -> 1
                "funkcje" -> 2
                "planimetria" -> 3
                "ciagi" -> 4
                else -> 5
            },
            edgePadding = 0.dp
        ) {
            val modules = listOf(
                "trygonometria" to "Trygonometria",
                "geometria-analityczna" to "Geometria Analityczna",
                "funkcje" to "Funkcje",
                "planimetria" to "Planimetria",
                "ciagi" to "Ciągi",
                "probabilitata" to "Prawdopodobieństwo"
            )
            modules.forEach { (key, name) ->
                Tab(
                    selected = selectedModule == key,
                    onClick = { selectedModule = key },
                    text = { Text(name) }
                )
            }
        }

        Spacer(modifier = Modifier.height(8.dp))

        PrimaryTabRow(selectedTabIndex = selectedTab) {
            Tab(selected = selectedTab == 0, onClick = { selectedTab = 0 }, text = { Text("Teoria") })
            Tab(selected = selectedTab == 1, onClick = { selectedTab = 1 }, text = { Text("Wzory") })
            Tab(selected = selectedTab == 2, onClick = { selectedTab = 2 }, text = { Text("Zadania") })
        }

        Spacer(modifier = Modifier.height(12.dp))

        val material = Repository.materials[selectedModule]

        when (selectedTab) {
            0 -> {
                val theory = material?.theory ?: emptyList()
                if (theory.isEmpty()) {
                    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                        Text("Brak opracowanej teorii w tym dziale.", style = MaterialTheme.typography.bodyLarge)
                    }
                } else {
                    LazyColumn(
                        verticalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.fillMaxSize()
                    ) {
                        items(theory) { item ->
                            TheoryCard(item)
                        }
                    }
                }
            }
            1 -> {
                val formulas = if (material?.formulas?.isNotEmpty() == true) material.formulas else Repository.formulas
                LazyColumn(
                    verticalArrangement = Arrangement.spacedBy(8.dp),
                    modifier = Modifier.fillMaxSize()
                ) {
                    items(formulas) { formula ->
                        FormulaCard(formula)
                    }
                }
            }
            2 -> {
                val tasks = if (material?.tasks?.isNotEmpty() == true) material.tasks else emptyList()
                if (tasks.isEmpty()) {
                    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                        Text("Brak zadań w tym dziale.", style = MaterialTheme.typography.bodyLarge)
                    }
                } else {
                    LazyColumn(
                        verticalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.fillMaxSize()
                    ) {
                        items(tasks) { task ->
                            MaterialTaskCard(task)
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun TheoryCard(item: TheoryItem) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = item.title,
                style = MaterialTheme.typography.titleMedium,
                color = MaterialTheme.colorScheme.primary
            )
            Spacer(modifier = Modifier.height(8.dp))
            MathView(latex = item.md, modifier = Modifier.fillMaxWidth().heightIn(min = 80.dp, max = 300.dp))
        }
    }
}

@Composable
fun FormulaCard(formula: FormulaData) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(
                text = formula.title,
                style = MaterialTheme.typography.titleMedium,
                color = MaterialTheme.colorScheme.primary
            )
            if (formula.category.isNotEmpty()) {
                Spacer(modifier = Modifier.height(4.dp))
                Text(
                    text = formula.category,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
            Spacer(modifier = Modifier.height(8.dp))
            MathView(latex = formula.latex, modifier = Modifier.fillMaxWidth().height(60.dp))
        }
    }
}

@Composable
fun MaterialTaskCard(task: MaterialTask) {
    var expanded by remember { mutableStateOf(false) }

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { expanded = !expanded },
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(
                    text = task.title.ifEmpty { task.id },
                    style = MaterialTheme.typography.titleMedium,
                    color = MaterialTheme.colorScheme.primary
                )
                if (task.difficulty.isNotEmpty()) {
                    Text(
                        text = task.difficulty,
                        style = MaterialTheme.typography.labelSmall,
                        color = MaterialTheme.colorScheme.secondary
                    )
                }
            }
            Spacer(modifier = Modifier.height(8.dp))
            MathView(latex = task.question, modifier = Modifier.fillMaxWidth().heightIn(min = 60.dp, max = 250.dp))

            if (expanded) {
                Spacer(modifier = Modifier.height(12.dp))
                HorizontalDivider()
                Spacer(modifier = Modifier.height(8.dp))
                if (!task.hint.isNullOrEmpty()) {
                    Text(
                        text = "Podpowiedź:",
                        style = MaterialTheme.typography.titleSmall,
                        color = MaterialTheme.colorScheme.secondary
                    )
                    MathView(latex = task.hint, modifier = Modifier.fillMaxWidth().heightIn(min = 40.dp, max = 150.dp))
                    Spacer(modifier = Modifier.height(8.dp))
                }
                if (task.solution.isNotEmpty()) {
                    Text(
                        text = "Rozwiązanie:",
                        style = MaterialTheme.typography.titleSmall,
                        color = MaterialTheme.colorScheme.primary
                    )
                    MathView(latex = task.solution, modifier = Modifier.fillMaxWidth().heightIn(min = 80.dp, max = 350.dp))
                }
            } else {
                Spacer(modifier = Modifier.height(8.dp))
                Text(
                    text = "Kliknij, aby zobaczyć rozwiązanie i podpowiedzi",
                    style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}
