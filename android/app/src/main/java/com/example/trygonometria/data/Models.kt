package com.example.trygonometria.data

import android.content.Context
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

@Serializable
data class AngleData(
    val deg: Int = 0,
    val radLatex: String = "",
    val radDecimal: Double = 0.0,
    val quadrant: String = "",
    val sinLatex: String = "",
    val sinVal: Double? = null,
    val cosLatex: String = "",
    val cosVal: Double? = null,
    val tgLatex: String = "",
    val tgVal: Double? = null,
    val ctgLatex: String = "",
    val ctgVal: Double? = null,
    val wierszyk: String = ""
)

@Serializable
data class TableAngleRow(
    val deg: Int,
    val radLatex: String,
    val radDecimal: Double,
    val quadrant: String,
    val wierszyk: String,
    val isSpecial: Boolean,
    val sinVal: Double,
    val cosVal: Double,
    val tgVal: Double?,
    val ctgVal: Double?,
    val sinLatex: String,
    val cosLatex: String,
    val tgLatex: String,
    val ctgLatex: String
)

@Serializable
data class FormulaData(
    val id: String = "",
    val title: String = "",
    val category: String = "",
    val latex: String = "",
    val notes: String? = null
)

@Serializable
data class TaskData(
    val id: String = "",
    val source: String? = null,
    val year: Int? = null,
    val level: String? = null,
    val topic: String? = null,
    val type: String? = null,
    val points: Int? = null,
    val question: String = "",
    val options: List<String>? = null,
    val answer: String? = null,
    val hint: String? = null,
    val solution: String? = null
)

@Serializable
data class TheoryItem(
    val title: String = "",
    val md: String = ""
)

@Serializable
data class MaterialTask(
    val id: String = "",
    val title: String = "",
    val category: String = "",
    val difficulty: String = "",
    val tags: List<String> = emptyList(),
    val question: String = "",
    val hint: String? = null,
    val solution: String = "",
    val answer: String? = null
)

@Serializable
data class MaterialData(
    val title: String = "",
    val description: String = "",
    val theory: List<TheoryItem> = emptyList(),
    val formulas: List<FormulaData> = emptyList(),
    val tasks: List<MaterialTask> = emptyList()
)

object Repository {
    private val json = Json { ignoreUnknownKeys = true }

    var angles: List<AngleData> = emptyList()
        private set
    var formulas: List<FormulaData> = emptyList()
        private set
    var tasks: List<TaskData> = emptyList()
        private set
    var materials: Map<String, MaterialData> = emptyMap()
        private set

    fun init(context: Context) {
        if (angles.isNotEmpty()) return
        try {
            val anglesJson = context.assets.open("angles.json").bufferedReader().use { it.readText() }
            angles = json.decodeFromString(anglesJson)

            val formulasJson = context.assets.open("formulas.json").bufferedReader().use { it.readText() }
            formulas = json.decodeFromString(formulasJson)

            val tasksJson = context.assets.open("tasks.json").bufferedReader().use { it.readText() }
            tasks = json.decodeFromString(tasksJson)

            val materialsJson = context.assets.open("materials.json").bufferedReader().use { it.readText() }
            materials = json.decodeFromString(materialsJson)
        } catch (e: Exception) {
            e.printStackTrace()
        }
    }

    fun generateFullTable(): List<TableAngleRow> {
        val specialMap = angles.associateBy { it.deg }
        val list = mutableListOf<TableAngleRow>()

        for (deg in 0..360) {
            val rad = deg * Math.PI / 180.0
            val spec = specialMap[deg]
            val isSpecial = spec != null

            val quadrant: String
            val wierszyk: String
            when (deg) {
                0, 180, 360 -> { quadrant = "Oś X"; wierszyk = "Granica ćwiartek" }
                90, 270 -> { quadrant = "Oś Y"; wierszyk = "Granica ćwiartek" }
                in 1..89 -> { quadrant = "I"; wierszyk = "I: same plusy (+)" }
                in 91..179 -> { quadrant = "II"; wierszyk = "II: tylko sinus (+)" }
                in 181..269 -> { quadrant = "III"; wierszyk = "III: tangens i cotangens (+)" }
                else -> { quadrant = "IV"; wierszyk = "IV: tylko cosinus (+)" }
            }

            val sinVal = Math.sin(rad)
            val cosVal = Math.cos(rad)
            val cleanSin = if (Math.abs(sinVal) < 1e-12) 0.0 else sinVal
            val cleanCos = if (Math.abs(cosVal) < 1e-12) 0.0 else cosVal

            val tgVal: Double? = if (deg != 90 && deg != 270) Math.tan(rad) else null
            val ctgVal: Double? = if (deg != 0 && deg != 180 && deg != 360) 1.0 / Math.tan(rad) else null

            fun formatDec(v: Double) = String.format("%.4f", v)

            val sinLatex = spec?.sinLatex ?: formatDec(cleanSin)
            val cosLatex = spec?.cosLatex ?: formatDec(cleanCos)
            val tgLatex = spec?.tgLatex ?: (tgVal?.let { formatDec(it) } ?: "\\text{brak}")
            val ctgLatex = spec?.ctgLatex ?: (ctgVal?.let { formatDec(it) } ?: "\\text{brak}")

            list.add(
                TableAngleRow(
                    deg = deg,
                    radLatex = spec?.radLatex ?: getPiFraction(deg),
                    radDecimal = Math.round(rad * 10000.0) / 10000.0,
                    quadrant = quadrant,
                    wierszyk = wierszyk,
                    isSpecial = isSpecial,
                    sinVal = Math.round(cleanSin * 10000.0) / 10000.0,
                    cosVal = Math.round(cleanCos * 10000.0) / 10000.0,
                    tgVal = tgVal?.let { Math.round(it * 10000.0) / 10000.0 },
                    ctgVal = ctgVal?.let { Math.round(it * 10000.0) / 10000.0 },
                    sinLatex = sinLatex,
                    cosLatex = cosLatex,
                    tgLatex = tgLatex,
                    ctgLatex = ctgLatex
                )
            )
        }
        return list
    }

    private fun getPiFraction(deg: Int): String {
        if (deg == 0) return "0"
        if (deg == 360) return "2\\pi"
        if (deg == 180) return "\\pi"

        fun gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)
        val div = gcd(deg, 180)
        val num = deg / div
        val den = 180 / div

        return when {
            den == 1 -> "${num}\\pi"
            num == 1 -> "\\frac{\\pi}{$den}"
            else -> "\\frac{${num}\\pi}{$den}"
        }
    }
}
