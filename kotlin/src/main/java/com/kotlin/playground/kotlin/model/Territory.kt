package com.kotlin.playground.kotlin.model

import com.github.andrewoma.kwery.core.Session
import com.github.andrewoma.kwery.mapper.AbstractDao
import com.github.andrewoma.kwery.mapper.Table
import com.github.andrewoma.kwery.mapper.TableConfiguration
import com.github.andrewoma.kwery.mapper.Value

data class Territory(
        val Id: String,
        val Description: String?,
        val RegionId: Int
)

object TerritoryTable : Table<Territory, String>("Territory", TableConfiguration(namingConvention = { s -> s.removePrefix("_") })) {
    val _Id by col(Territory::Id, true)
    val _TerritoryDescription by col(Territory::Description)
    val _RegionId by col(Territory::RegionId)

    override fun idColumns(id: String) = setOf(_Id of id)

    override fun create(value: Value<Territory>) = Territory(value of _Id, value of _TerritoryDescription, value of _RegionId)
}

class TerritoryDAO(session: Session) : AbstractDao<Territory, String>(session, TerritoryTable, Territory::Id)