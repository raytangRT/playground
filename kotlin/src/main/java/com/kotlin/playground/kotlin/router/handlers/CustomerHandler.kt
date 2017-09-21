package com.kotlin.playground.kotlin.router.handlers

import com.kotlin.playground.kotlin.dao.DaoFactory
import com.kotlin.playground.kotlin.dao.model.Customer

object CustomerHandler : AbstractHandler<Customer, String>(DaoFactory.CustomerDAO) {
    override fun String.toModelKey() = this
}