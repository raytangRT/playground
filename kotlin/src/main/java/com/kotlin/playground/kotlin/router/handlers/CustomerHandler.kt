package com.kotlin.playground.kotlin.router.handlers

import spark.Request
import spark.Response
import com.kotlin.playground.kotlin.dao.DaoFactory

object CustomerHandler {
    val listAllCustomers = { _: Request, _: Response -> DaoFactory.CustomerDAO.findAll() }
}