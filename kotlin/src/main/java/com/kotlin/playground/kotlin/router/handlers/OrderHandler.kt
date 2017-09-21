
package com.kotlin.playground.kotlin.router.handlers

import com.github.andrewoma.kwery.fetcher.Type
import com.github.andrewoma.kwery.fetcher.Property

import com.kotlin.playground.kotlin.dao.DaoFactory
import com.kotlin.playground.kotlin.dao.model.Order
import com.kotlin.playground.kotlin.dao.model.OrderDetail

object OrderHandler : AbstractHandler<Order, Int>(DaoFactory.OrderDAO) {
    override fun String.toModelKey() = this.toInt()
    
}

object OrderDetailHandler : AbstractHandler<OrderDetail, String>(DaoFactory.OrderDetailDAO) {
    override fun String.toModelKey() = this
}