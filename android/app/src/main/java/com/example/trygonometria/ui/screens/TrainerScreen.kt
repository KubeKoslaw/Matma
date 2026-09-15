package com.example.trygonometria.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.trygonometria.data.Repository
import com.example.trygonometria.data.UserProgress
import kotlin.random.Random

@Composable
fun TrainerScreen(userProgress: UserProgress) {
    var activeQuiz by remember { mutableStateOf(false) }
    var currentQuestionIndex by remember { mutableStateOf(0) }
    var score by remember { mutableStateOf(0) }
    var streak by remember { mutableStateOf(0) }
    var selectedOption by remember { mutableStateOf<String?>(null) }
    var isCorrect by remember { mutableStateOf<Boolean?>(null) }

    val angles = remember { Repository.angles.filter { it.sinVal != null } }
    val currentAngle = remember(currentQuestionIndex) {
        if (angles.isNotEmpty()) angles[Random.nextInt(angles.size)] else null
    }

    val options = remember(currentAngle) {
        if (currentAngle == null) emptyList()
        else {
            val correct = currentAngle.sinLatex
            val dists = angles.map { it.sinLatex }.distinct().filter { it != correct }.shuffled().take(3)
            (dists + correct).shuffled()
        }
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Trener Quiz",
            style = MaterialTheme.typography.headlineMedium,
            color = MaterialTheme.colorScheme.onBackground
        )

        Spacer(modifier = Modifier.height(8.dp))

        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceAround
        ) {
            Card(colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer)) {
                Text(
                    text = "XP: ${userProgress.xp}",
                    modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp),
                    style = MaterialTheme.typography.titleMedium
                )
            }
            Card(colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.secondaryContainer)) {
                Text(
                    text = "Seria: $streak 🔥",
                    modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp),
                    style = MaterialTheme.typography.titleMedium
                )
            }
        }

        Spacer(modifier = Modifier.height(24.dp))

        if (!activeQuiz) {
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
            ) {
                Column(
                    modifier = Modifier.padding(24.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "Sprawdź swoją wiedzę z wartości funkcji trygonometrycznych!",
                        style = MaterialTheme.typography.bodyLarge
                    )
                    Spacer(modifier = Modifier.height(16.dp))
                    Button(
                        onClick = {
                            activeQuiz = true
                            currentQuestionIndex = 0
                            score = 0
                            streak = 0
                        },
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Text("Rozpocznij Quiz")
                    }
                }
            }
        } else if (currentAngle != null) {
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
            ) {
                Column(
                    modifier = Modifier.padding(20.dp),
                    horizontalAlignment = Alignment.CenterHorizontally
                ) {
                    Text(
                        text = "Ile wynosi sin(${currentAngle.deg}°)?",
                        style = MaterialTheme.typography.titleLarge,
                        color = MaterialTheme.colorScheme.primary
                    )
                    Spacer(modifier = Modifier.height(20.dp))

                    options.forEach { option ->
                        Button(
                            onClick = {
                                if (selectedOption == null) {
                                    selectedOption = option
                                    if (option == currentAngle.sinLatex) {
                                        isCorrect = true
                                        score += 10
                                        streak += 1
                                        userProgress.addXp(10)
                                    } else {
                                        isCorrect = false
                                        streak = 0
                                    }
                                }
                            },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(vertical = 4.dp),
                            colors = ButtonDefaults.buttonColors(
                                containerColor = when {
                                    selectedOption == option && isCorrect == true -> MaterialTheme.colorScheme.secondary
                                    selectedOption == option && isCorrect == false -> MaterialTheme.colorScheme.error
                                    else -> MaterialTheme.colorScheme.primary
                                }
                            )
                        ) {
                            Text(text = option, style = MaterialTheme.typography.titleMedium)
                        }
                    }

                    if (selectedOption != null) {
                        Spacer(modifier = Modifier.height(16.dp))
                        Button(
                            onClick = {
                                selectedOption = null
                                isCorrect = null
                                currentQuestionIndex++
                            },
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Text("Następne pytanie")
                        }
                    }
                }
            }
        }
    }
}
