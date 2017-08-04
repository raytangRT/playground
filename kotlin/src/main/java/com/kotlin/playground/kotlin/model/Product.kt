package com.kotlin.playground.kotlin.model

import com.github.andrewoma.kwery.mapper.Table
import com.github.andrewoma.kwery.mapper.TableConfiguration
import com.github.andrewoma.kwery.mapper.Value
import java.math.BigDecimal

data class Product(
        val Id: Int,
        val ProductName: String?,
        val SupplierId: Int,
        val CategoryId: Int,
        val QuantityPerUnit: String,
        val UnitPrice: BigDecimal,
        val UnitsInStock: Int,
        val UnitsOnOrder: Int,
        val ReorderLevel: Int,
        val Discontinued: Int
)

object ProductTable : Table<Product, Int>("Product", TableConfiguration(namingConvention = { s -> s.removePrefix("_") })) {

    val _Id by col(Product::Id, true)
    val _ProductName by col(Product::ProductName)
    val _SupplierId by col(Product::SupplierId)
    val _CategoryId by col(Product::CategoryId)
    val _QuantityPerUnit by col(Product::QuantityPerUnit)
    val _UnitPrice by col(Product::UnitPrice)
    val _UnitsInStock by col(Product::UnitsInStock)
    val _UnitsOnOrder by col(Product::UnitsOnOrder)
    val _ReorderLevel by col(Product::ReorderLevel)
    val _Discontinued by col(Product::Discontinued)

    override fun create(value: Value<Product>) = Product(value of _Id, value of _ProductName, 
            value of _SupplierId, value of _CategoryId, value of _QuantityPerUnit, 
            value of _UnitPrice, value of _UnitsInStock, value of _UnitsOnOrder, 
            value of _ReorderLevel, value of _Discontinued)

    override fun idColumns(id: Int) = setOf(_Id of id)
}