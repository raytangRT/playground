package com.kotlin.playground.kotlin.model

import com.github.andrewoma.kwery.core.Session
import com.github.andrewoma.kwery.mapper.AbstractDao
import com.github.andrewoma.kwery.mapper.Table
import com.github.andrewoma.kwery.mapper.TableConfiguration
import com.github.andrewoma.kwery.mapper.Value

data class Region(val Id: Int, val Description: String)

object RegionTable : Table<Region, Int>("Region", TableConfiguration(namingConvention = { s -> s.removePrefix("_") })) {

    val _Id by col(Region::Id, true)
    val _RegionDescription by col(Region::Description)

    override fun idColumns(id: Int) = setOf(_Id of id)

    override fun create(value: Value<Region>) = Region(value of _Id, value of _RegionDescription)
}

class RegionDAO(session: Session) : AbstractDao<Region, Int>(session, RegionTable, Region::Id)