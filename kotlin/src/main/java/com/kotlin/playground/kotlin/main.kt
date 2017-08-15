package com.kotlin.playground.kotlin

import spark.Spark.*
import com.fasterxml.jackson.module.kotlin.*
import com.kotlin.playground.kotlin.dao.DaoFactory
import com.kotlin.playground.kotlin.model.*

fun main(args: Array<String>) {
    val mapper = jacksonObjectMapper().registerKotlinModule()
    port(12312)
    
    get("/") { _, _ -> "Hello" }
    post("/Customers") { _, _ -> mapper.writeValueAsString(DaoFactory.CustomerDAO.findAll().first()) }
    get("/Customers") { _, _ ->
        val customers = DaoFactory.CustomerDAO.findAll()
        
        TemplateUtil.render("templates/customers.ftl", mapOf("customers" to customers))
    }
}