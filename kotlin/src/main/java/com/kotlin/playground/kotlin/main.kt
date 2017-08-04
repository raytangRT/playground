package com.kotlin.playground.kotlin

import com.github.andrewoma.kwery.core.*
import com.kotlin.playground.kotlin.model.*
import com.kotlin.playground.kotlin.dao.*

fun main(args: Array<String>) {
    val customers = DaoFactory.CustomerDAO.findById("ALFKI")
    
    println(customers)    
}