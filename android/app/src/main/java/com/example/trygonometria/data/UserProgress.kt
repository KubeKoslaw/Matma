package com.example.trygonometria.data

import android.content.Context
import android.content.SharedPreferences

class UserProgress(context: Context) {
    private val prefs: SharedPreferences = context.getSharedPreferences("user_progress", Context.MODE_PRIVATE)

    var xp: Int
        get() = prefs.getInt("xp", 0)
        set(value) = prefs.edit().putInt("xp", value).apply()

    var streak: Int
        get() = prefs.getInt("streak", 0)
        set(value) = prefs.edit().putInt("streak", value).apply()

    var stars: Int
        get() = prefs.getInt("stars", 0)
        set(value) = prefs.edit().putInt("stars", value).apply()

    var completedStages: Set<String>
        get() = prefs.getStringSet("completed_stages", emptySet()) ?: emptySet()
        set(value) = prefs.edit().putStringSet("completed_stages", value).apply()

    fun addXp(amount: Int) {
        xp += amount
    }

    fun completeStage(stageId: String, earnedStars: Int) {
        val newSet = completedStages.toMutableSet()
        newSet.add(stageId)
        completedStages = newSet
        stars += earnedStars
    }
}
