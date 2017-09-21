package com.kotlin.playground.kotlin.dao.model

import com.github.andrewoma.kwery.core.Session
import com.github.andrewoma.kwery.mapper.AbstractDao
import com.github.andrewoma.kwery.mapper.Table
import com.github.andrewoma.kwery.mapper.TableConfiguration
import com.github.andrewoma.kwery.mapper.Value

data class Supplier(
        val Id: Int,
        val CompanyName: String?,
        val ContactName: String?,
        val ContactTitle: String?,
        val Address: Address,
        val Phone: String?,
        val Fax: String?,
        val HomePage: String?
)

object SupplierTable : Table<Supplier, Int>("Supplier", TableConfiguration(namingConvention = { s -> s.removePrefix("_") })) {

    val _Id by col(Supplier::Id, true)
    val _CompanyName by col(Supplier::CompanyName)
    val _ContactName by col(Supplier::ContactName)
    val _ContactTitle by col(Supplier::ContactTitle)
    val _Address by col(Address::Address, Supplier::Address)
    val _City by col(Address::City, Supplier::Address)
    val _Region by col(Address::Region, Supplier::Address)
    val _PostalCode by col(Address::PostalCode, Supplier::Address)
    val _Country by col(Address::Country, Supplier::Address)
    val _Phone by col(Supplier::Phone)
    val _Fax by col(Supplier::Fax)
    val _HomePage by col(Supplier::HomePage)

    override fun idColumns(id: Int) = setOf(_Id of id)

    override fun create(value: Value<Supplier>) = Supplier(
            value of _Id, value of _CompanyName,
            value of _ContactName, value of _ContactTitle,
            Address(value of _Address, value of _City, value of _Region,
                    value of _PostalCode, value of _Country),
            value of _Phone, value of _Fax, value of _HomePage)
}

class SupplierDAO(session: Session) : AbstractDao<Supplier, Int>(session, SupplierTable, Supplier::Id)