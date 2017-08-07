package com.kotlin.playground.kotlin.model

import com.github.andrewoma.kwery.core.Session
import com.github.andrewoma.kwery.mapper.AbstractDao
import com.github.andrewoma.kwery.mapper.Table
import com.github.andrewoma.kwery.mapper.TableConfiguration
import com.github.andrewoma.kwery.mapper.Value

data class EmployeeTerritory(
        val Id: String,
        val EmployeeId: Int,
        val TerritoryId: String?
)

object EmployeeTerritoryTable : Table<EmployeeTerritory, String>("EmployeeTerritory", TableConfiguration(namingConvention = { s -> s.removePrefix("_") })) {

    val _Id by col(EmployeeTerritory::Id, true)
    val _EmployeeId by col(EmployeeTerritory::EmployeeId)
    val _TerritoryId by col(EmployeeTerritory::TerritoryId)

    override fun idColumns(id: String) = setOf(_Id of id)

    override fun create(value: Value<EmployeeTerritory>) = EmployeeTerritory(value of _Id, value of _EmployeeId, value of _TerritoryId)
}

class EmployeeTerritoryDAO(session: Session) : AbstractDao<EmployeeTerritory, String>(session, EmployeeTerritoryTable, EmployeeTerritory::Id)