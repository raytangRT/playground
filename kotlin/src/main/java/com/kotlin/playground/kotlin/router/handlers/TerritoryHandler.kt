package com.kotlin.playground.kotlin.router.handlers

import com.kotlin.playground.kotlin.dao.DaoFactory
import com.kotlin.playground.kotlin.dao.model.Territory

object TerritoryHandler : AbstractHandler<Territory, String>(DaoFactory.TerritoryDAO) {
    override fun String.toModelKey() = this
}