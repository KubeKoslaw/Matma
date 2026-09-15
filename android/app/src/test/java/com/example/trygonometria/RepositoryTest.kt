package com.example.trygonometria

import com.example.trygonometria.data.Repository
import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test

class RepositoryTest {
    @Test
    fun testGenerateFullTable() {
        val table = Repository.generateFullTable()
        assertEquals(361, table.size)
        assertEquals(0, table.first().deg)
        assertEquals(360, table.last().deg)

        val angle90 = table.find { it.deg == 90 }
        assertTrue(angle90 != null)
        assertEquals(1.0, angle90!!.sinVal, 1e-4)
        assertEquals(0.0, angle90.cosVal, 1e-4)
    }
}
