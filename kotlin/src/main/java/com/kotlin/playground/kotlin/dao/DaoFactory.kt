package com.kotlin.playground.kotlin.dao

import com.github.andrewoma.kwery.core.dialect.SqliteDialect
import com.github.andrewoma.kwery.core.DefaultSession

import java.sql.DriverManager
import com.kotlin.playground.kotlin.dao.model.*

object DaoFactory {
    init {
        Class.forName("org.sqlite.JDBC")
    }

    fun getSession() =
            DefaultSession(DriverManager.getConnection("jdbc:sqlite::resource:Northwind_large.sqlite"), SqliteDialect(),
                    com.github.andrewoma.kwery.core.interceptor.LoggingInterceptor())

    val CategoryDAO get() = CategoryDAO(getSession())
    val CustomerDAO get() = CustomerDAO(getSession())
    val EmployeeDAO get() = EmployeeDAO(getSession())
    val EmployeeTerritoryDAO get() = EmployeeTerritoryDAO(getSession())
    val OrderDAO get() = OrderDAO(getSession())
    val OrderDetailDAO get() = OrderDetailDAO(getSession())
    val ProductDAO get() = ProductDAO(getSession())
    val RegionDAO get() = RegionDAO(getSession())
    val ShipperDAO get() = ShipperDAO(getSession())
    val TerritoryDAO get() = TerritoryDAO(getSession())
}