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
        val OrderDate: String?,
        val RequiredDate: String?,
        val ShippedDate: String?,
        val ShipVia: Int?,
        val Freight: BigDecimal?,
        val ShipName: String?,
        val ShipAddress: Address
)

object OrderTable : Table<Order, Int>("\"Order\"", TableConfiguration(namingConvention = { s -> s.removePrefix("_") })) {
    
    val _Id by col(Order::Id, true)
    val _CustomerId by col(Order::CustomerId)
    val _EmployeeId by col(Order::EmployeeId)
    val _OrderDate by col(Order::OrderDate)
    val _RequiredDate by col(Order::RequiredDate)
    val _ShippedDate by col(Order::ShippedDate)
    val _ShipVia by col(Order::ShipVia)
    val _Freight by col(Order::Freight)
    val _ShipName by col(Order::ShipName)
    val _ShipAddress by col(Address::Address, Order::ShipAddress)
    val _ShipCity by col(Address::City, Order::ShipAddress)
    val _ShipRegion by col(Address::Region, Order::ShipAddress)
    val _ShipPostalCode by col(Address::PostalCode, Order::ShipAddress)
    val _ShipCountry by col(Address::Country, Order::ShipAddress)
    
    override fun create(value: Value<Order>) = Order(value of _Id, 
            value of _CustomerId, value of _EmployeeId, value of _OrderDate, 
            value of _RequiredDate, value of _ShippedDate, value of _ShipVia, 
            value of _Freight, value of _ShipName, 
            Address(value of _ShipAddress, value of _ShipCity, value of _ShipRegion, 
                    value of _ShipPostalCode, value of _ShipCountry))

    override fun idColumns(id: Int) = setOf(_Id of id)
}