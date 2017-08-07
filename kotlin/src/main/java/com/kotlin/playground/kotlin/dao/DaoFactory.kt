package com.kotlin.playground.kotlin.dao

import com.github.andrewoma.kwery.core.dialect.SqliteDialect
import com.github.andrewoma.kwery.core.DefaultSession

import java.sql.DriverManager
import com.kotlin.playground.kotlin.model.*

object DaoFactory {
    init {        
        Class.forName("org.sqlite.JDBC")
    }
    
    val CategoryDAO = CategoryDAO(getSession())
    val CustomerDAO = CustomerDAO(getSession())
    val EmployeeDAO = EmployeeDAO(getSession())
    val EmployeeTerritoryDAO = EmployeeTerritoryDAO(getSession())
    val OrderDAO = OrderDAO(getSession())
    val OrderDetailDAO = OrderDetailDAO(getSession())
    val ProductDAO = ProductDAO(getSession())
    val RegionDAO = RegionDAO(getSession())
    val ShipperDAO = ShipperDAO(getSession())
    val TerritoryDAO = TerritoryDAO(getSession())
    
    fun getSession() =
        DefaultSession(DriverManager.getConnection("jdbc:sqlite::resource:Northwind_large.sqlite"), SqliteDialect(),
                com.github.andrewoma.kwery.core.interceptor.LoggingInterceptor())
    
}