package com.kotlin.playground.kotlin.model

import com.github.andrewoma.kwery.core.Session
import com.github.andrewoma.kwery.mapper.AbstractDao
import com.github.andrewoma.kwery.mapper.Column
import com.github.andrewoma.kwery.mapper.Table
import com.github.andrewoma.kwery.mapper.TableConfiguration
import com.github.andrewoma.kwery.mapper.Value

data class Customer(
        val Id: String,
        val CompanyName: String?,
        val ContactName: String?,
        val ContactTitle: String?,
        val Address: Address,
        val Phone: String?,
        val Fax: String?)

object CustomerTable : Table<Customer, String>("Customer", TableConfiguration(namingConvention = { s -> s.removePrefix("_") })) {

    val _Id by col(Customer::Id, true)
    val _CompanyName by col(Customer::CompanyName)
    val _ContactName by col(Customer::ContactName)
    val _ContactTitle by col(Customer::ContactTitle)
    val _Address by col(Address::Address, Customer::Address)
    val _City by col(Address::City, Customer::Address)
    val _Region by col(Address::Region, Customer::Address)
    val _PostalCode by col(Address::PostalCode, Customer::Address)
    val _Country by col(Address::Country, Customer::Address)
    val _Phone by col(Customer::Phone)
    val _Fax by col(Customer::Fax)

    override fun idColumns(id: String) = setOf(_Id of id)

    override fun create(value: Value<Customer>) = Customer(
            value of _Id,
            value of _CompanyName,
            value of _ContactName,
            value of _ContactTitle,
            Address(value of _Address,
                    value of _City,
                    value of _Region,
                    value of _PostalCode,
                    value of _Country),
            value of _Phone,
            value of _Fax)
}

class CustomerDAO(session: Session) : AbstractDao<Customer, String>(session, CustomerTable, Customer::Id)