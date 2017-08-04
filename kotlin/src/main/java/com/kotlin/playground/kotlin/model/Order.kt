package com.kotlin.playground.kotlin.model

import com.github.andrewoma.kwery.mapper.Table
import com.github.andrewoma.kwery.mapper.TableConfiguration
import com.github.andrewoma.kwery.mapper.Value

import java.math.BigDecimal
import java.sql.Date

data class Order(
        val Id: Int,
        val CustomerId: String?,
        val EmployeeId: Int,
        val OrderDate: Date?,
        val RequitedDate: Date?,
        val ShippedDate: Date?,
        val ShipVia: Int?,
        val Freight: BigDecimal?,
        val ShipName: String?,
        val ShipAddress: Address?
)

object OrderTable : Table<Order, Int>("Order", TableConfiguration(namingConvention = { s -> s.removePrefix("_") })) {
    
    val _Id by col(Order::Id)
    val _CustomerId by col(Order::CustomerId)
    val _EmployeeId by col(Order::EmployeeId)
    
    override fun create(value: Value<Order>) = Order(value of _Id)

    override fun idColumns(id: Int) = setOf(_Id of id)
}