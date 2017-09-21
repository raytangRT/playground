
package com.kotlin.playground.kotlin.router.handlers

import com.kotlin.playground.kotlin.dao.DaoFactory
import com.kotlin.playground.kotlin.dao.model.Product

object ProductHandler : AbstractHandler<Product, Int>(DaoFactory.ProductDAO) {
    override fun String.toModelKey() = this.toInt()
}