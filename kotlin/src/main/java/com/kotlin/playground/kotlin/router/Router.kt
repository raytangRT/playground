package com.kotlin.playground.kotlin

import com.fasterxml.jackson.module.kotlin.*
import com.kotlin.playground.kotlin.router.Paths
import com.kotlin.playground.kotlin.router.handlers.*
import spark.Spark.*
import spark.*

class Router {
    private val mapper  = jacksonObjectMapper().registerKotlinModule()
    
    private data class ErrorMessage(val message: String)
    
    private val toJson = { objects: Any? -> mapper.writeValueAsString(objects ?: ErrorMessage("Item not found")) }
    
    private fun <Model, ModelKey>registerHandlers(path : String, handler: AbstractHandler<Model, ModelKey>) 
    where Model : Any, ModelKey : Any {
        get("${path}", handler.listAll, toJson)
        get("${path}/:Id", handler.listById, toJson)
    }
    
    init {
        before("/*") { _, response ->
            response.header("Access-Control-Allow-Origin", "*")
            response.header("Access-Control-Allow-Methods", "GET, POST, DELETE")
            response.type("application/json")
        }
        
        //get(Paths.HOME, HomeHandler.homePage)
        
        registerHandlers(Paths.CATEGORIES, CategoryHandler)
        registerHandlers(Paths.CUSTOMERS, CustomerHandler)
        registerHandlers(Paths.EMPLOYEES, EmployeeHandler)
        registerHandlers(Paths.EMPLOYEETERRITORY, EmployeeTerritoryHandler)
        registerHandlers(Paths.ORDERS, OrderHandler)
        registerHandlers(Paths.ORDERDETAILS, OrderDetailHandler)
        registerHandlers(Paths.PRODUCTS, ProductHandler)
        registerHandlers(Paths.REGIONS, RegionHandler)
        registerHandlers(Paths.SHIPPERS, ShipperHandler)
        registerHandlers(Paths.SUPPLIERS, SupplierHandler)
        registerHandlers(Paths.TERRITORY, TerritoryHandler)
        //get(Paths.CUSTOMERS, CustomerHandler.listAllCustomers) { customers -> TemplateUtil.render("customers.ftl", mapOf("customers" to customers)) }
    }
}