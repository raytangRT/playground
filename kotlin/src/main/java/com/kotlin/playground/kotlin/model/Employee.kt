package com.kotlin.playground.kotlin.model

import com.github.andrewoma.kwery.core.Session
import com.github.andrewoma.kwery.mapper.AbstractDao
import com.github.andrewoma.kwery.mapper.Table
import com.github.andrewoma.kwery.mapper.TableConfiguration
import com.github.andrewoma.kwery.mapper.Value

data class Employee(
        val Id: Int,
        val LastName: String?,
        val FirstName: String?,
        val Title: String?,
        val TitleOfCourtesy: String?,
        val BirthDate: String?,
        val HireDate: String?,
        val Address: Address,
        val HomePhone: String?,
        val Extension: String?,
        val Photo: ByteArray?,
        val Notes: String?,
        val ReportsTo: Int?,
        val PhotoPath: String?
)

object EmployeeTable : Table<Employee, Int>("Employee", TableConfiguration(namingConvention = { s -> s.removePrefix("_") })) {

    val _Id by col(Employee::Id, true)
    val _LastName by col(Employee::LastName)
    val _FirstName by col(Employee::FirstName)
    val _Title by col(Employee::Title)
    val _TitleOfCourtesy by col(Employee::TitleOfCourtesy)
    val _BirthDate by col(Employee::BirthDate)
    val _HireDate by col(Employee::HireDate)
    val _Address by col(Address::Address, Employee::Address)
    val _City by col(Address::City, Employee::Address)
    val _Region by col(Address::Region, Employee::Address)
    val _PostalCode by col(Address::PostalCode, Employee::Address)
    val _Country by col(Address::Country, Employee::Address)
    val _HomePhone by col(Employee::HomePhone)
    val _Extension by col(Employee::Extension)
    val _Photo by col(Employee::Photo)
    val _Notes by col(Employee::Notes)
    val _ReportsTo by col(Employee::ReportsTo)
    val _PhotoPath by col(Employee::PhotoPath)

    override fun idColumns(id: Int) = setOf(_Id of id)

    override fun create(value: Value<Employee>) = Employee(
            value of _Id, value of _LastName, value of _FirstName, value of _Title, value of _TitleOfCourtesy,
            value of _BirthDate, value of _HireDate,
            Address(value of _Address, value of _City, value of _Region, value of _PostalCode, value of _Country),
            value of _HomePhone, value of _Extension, value of _Photo, value of _Notes, value of _ReportsTo, value of _PhotoPath)
}

class EmployeeDAO(session: Session) : AbstractDao<Employee, Int>(session, EmployeeTable, Employee::Id)