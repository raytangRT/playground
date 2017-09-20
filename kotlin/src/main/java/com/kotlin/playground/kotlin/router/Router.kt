package com.kotlin.playground.kotlin

import com.fasterxml.jackson.module.kotlin.*
import com.kotlin.playground.kotlin.router.Paths
import com.kotlin.playground.kotlin.router.handlers.*
import spark.Spark.*
import spark.*

class Router {
    val mapper  = jacksonObjectMapper().registerKotlinModule()
    init {
        before("/*") { _, response ->
            response.header("Access-Control-Allow-Origin", "*")
            response.header("Access-Control-Allow-Methods", "GET, POST, DELETE")
        }
        
        get(Paths.HOME, HomeHandler.homePage)
        post(Paths.CUSTOMERS, CustomerHandler.listAllCustomers) { customers -> mapper.writeValueAsString(customers) }
        get(Paths.CUSTOMERS, CustomerHandler.listAllCustomers) { customers -> TemplateUtil.render("customers.ftl", mapOf("customers" to customers)).toString() }
    }
}