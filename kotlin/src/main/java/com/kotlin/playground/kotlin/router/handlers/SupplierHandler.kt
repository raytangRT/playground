package com.kotlin.playground.kotlin.router.handlers

import com.kotlin.playground.kotlin.dao.DaoFactory
import com.kotlin.playground.kotlin.dao.model.Supplier

object SupplierHandler : AbstractHandler<Supplier, Int>(DaoFactory.SupplierDAO) {
    override fun String.toModelKey() = this.toInt()
}