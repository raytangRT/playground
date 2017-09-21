package com.kotlin.playground.kotlin.router.handlers

import com.kotlin.playground.kotlin.dao.DaoFactory
import com.kotlin.playground.kotlin.dao.model.Shipper

object ShipperHandler : AbstractHandler<Shipper, Int>(DaoFactory.ShipperDAO) {
    override fun String.toModelKey() = this.toInt()
}