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
    object EmployeeTerritoryDAO : AbstractDao<EmployeeTerritory, String>(session, EmployeeTerritoryTable, EmployeeTerritory::Id)
    object OrderDAO : AbstractDao<Order, Int>(session, OrderTable, Order::Id)
    object OrderDetailDAO : AbstractDao<OrderDetail, String>(session, OrderDetailTable, OrderDetail::Id)
    object ProductDAO : AbstractDao<Product, Int>(session, ProductTable, Product::Id)
    object RegionDAO : AbstractDao<Region, Int>(session, RegionTable, Region::Id)
    object ShipperDAO : AbstractDao<Shipper, Int>(session, ShipperTable, Shipper::Id)
    object SupplierDAO : AbstractDao<Supplier, Int>(session, SupplierTable, Supplier::Id)
    object TerritoryDAO : AbstractDao<Territory, String>(session, TerritoryTable, Territory::Id)

    val session by lazy {
        Class.forName("org.sqlite.JDBC")
        DefaultSession(DriverManager.getConnection("jdbc:sqlite::resource:Northwind_large.sqlite"), SqliteDialect(),
                com.github.andrewoma.kwery.core.interceptor.LoggingInterceptor())
    }
}