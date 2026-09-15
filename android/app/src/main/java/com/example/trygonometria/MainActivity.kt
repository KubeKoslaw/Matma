package com.example.trygonometria

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import com.example.trygonometria.data.Repository
import com.example.trygonometria.data.UserProgress
import com.example.trygonometria.ui.screens.*
import com.example.trygonometria.ui.theme.MatmaTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        Repository.init(applicationContext)
        val userProgress = UserProgress(applicationContext)

        setContent {
            MatmaTheme {
                var selectedTab by remember { mutableStateOf(0) }

                Scaffold(
                    bottomBar = {
                        NavigationBar {
                            NavigationBarItem(
                                selected = selectedTab == 0,
                                onClick = { selectedTab = 0 },
                                label = { Text("Hub") },
                                icon = { Text("🏠") }
                            )
                            NavigationBarItem(
                                selected = selectedTab == 1,
                                onClick = { selectedTab = 1 },
                                label = { Text("Okrąg") },
                                icon = { Text("⭕") }
                            )
                            NavigationBarItem(
                                selected = selectedTab == 2,
                                onClick = { selectedTab = 2 },
                                label = { Text("Tabela") },
                                icon = { Text("📋") }
                            )
                            NavigationBarItem(
                                selected = selectedTab == 3,
                                onClick = { selectedTab = 3 },
                                label = { Text("Wzory") },
                                icon = { Text("📚") }
                            )
                            NavigationBarItem(
                                selected = selectedTab == 4,
                                onClick = { selectedTab = 4 },
                                label = { Text("Trener") },
                                icon = { Text("🎯") }
                            )
                            NavigationBarItem(
                                selected = selectedTab == 5,
                                onClick = { selectedTab = 5 },
                                label = { Text("Kalkulator") },
                                icon = { Text("🧮") }
                            )
                        }
                    }
                ) { innerPadding ->
                    Surface(
                        modifier = Modifier.padding(innerPadding),
                        color = MaterialTheme.colorScheme.background
                    ) {
                        when (selectedTab) {
                            0 -> HubScreen(onNavigate = { selectedTab = it })
                            1 -> UnitCircleScreen()
                            2 -> TableScreen()
                            3 -> FormularzIZadaniaScreen()
                            4 -> TrainerScreen(userProgress = userProgress)
                            5 -> CalculatorsScreen()
                        }
                    }
                }
            }
        }
    }
}
