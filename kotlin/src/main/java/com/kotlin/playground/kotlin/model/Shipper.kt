package com.kotlin.playground.kotlin.model

import com.github.andrewoma.kwery.mapper.Table
import com.github.andrewoma.kwery.mapper.TableConfiguration
import com.github.andrewoma.kwery.mapper.Value

data class Shipper(val Id: Int, val CompanyName: String?, val Phone: String?)

object ShipperTable : Table<Shipper, Int>("Shipper", TableConfiguration(namingConvention = { s -> s.removePrefix("_") })) {
    
    val _Id by col(Shipper::Id, true)
    val _CompanyName by col(Shipper::CompanyName)
    val _Phone by col(Shipper::Phone)
    
    override fun idColumns(id: Int) = setOf(_Id of id)

    override fun create(value: Value<Shipper>) = Shipper(value of _Id, value of _CompanyName, value of _Phone)
}