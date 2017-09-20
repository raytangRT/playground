package com.kotlin.playground.kotlin

import spark.Spark.*
import com.kotlin.playground.kotlin.Router

fun main(args: Array<String>) {
    port(12312)
    Router()
}