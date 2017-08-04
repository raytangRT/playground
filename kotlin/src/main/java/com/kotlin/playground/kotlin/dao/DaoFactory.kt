package com.kotlin.playground.kotlin.dao

import com.github.andrewoma.kwery.mapper.AbstractDao
import com.github.andrewoma.kwery.core.dialect.SqliteDialect
import com.github.andrewoma.kwery.core.DefaultSession

import java.sql.DriverManager
import com.kotlin.playground.kotlin.model.*

object DaoFactory {

    object CustomerDAO : AbstractDao<Customer, String>(session, CustomerTable, Customer::Id)
    object CategoryDAO : AbstractDao<Category, Int>(session, CategoryTable, Category::Id)
    object EmployeeDAO : AbstractDao<Employee, Int>(session, EmployeeTable, Employee::Id)
    
    val session by lazy {
        Class.forName("org.sqlite.JDBC")
        DefaultSession(DriverManager.getConnection("jdbc:sqlite::resource:Northwind_large.sqlite"), SqliteDialect())
    }
}