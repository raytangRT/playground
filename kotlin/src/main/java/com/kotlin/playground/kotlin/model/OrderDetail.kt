package com.kotlin.playground.kotlin.model

import com.github.andrewoma.kwery.mapper.Table
import com.github.andrewoma.kwery.mapper.TableConfiguration
import com.github.andrewoma.kwery.mapper.Value
import java.math.BigDecimal

data class OrderDetail(
        val Id: String,
        val OrderId: Int,
        val ProductId: Int,
        val UnitPrice: BigDecimal,
        val Quantity: Int,
        val Discount: Double
)

object OrderDetailTable : Table<OrderDetail, String>("OrderDetail", TableConfiguration(namingConvention = { s -> s.removePrefix("_") })) {
    
    val _Id by col(OrderDetail::Id, true)
    val _OrderId by col(OrderDetail::OrderId)
    val _ProductId by col(OrderDetail::ProductId)
    val _UnitPrice by col(OrderDetail::UnitPrice)
    val _Quantity by col(OrderDetail::Quantity)
    val _Discount by col(OrderDetail::Discount)
    
    override fun create(value: Value<OrderDetail>) = OrderDetail(value of _Id, value of _OrderId, 
            value of _ProductId, value of _UnitPrice, value of _Quantity, value of _Discount)

    override fun idColumns(id: String) = setOf(_Id of id)
}