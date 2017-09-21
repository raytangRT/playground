package com.kotlin.playground.kotlin.router.handlers

import com.kotlin.playground.kotlin.dao.DaoFactory
import com.kotlin.playground.kotlin.dao.model.Category

object CategoryHandler : AbstractHandler<Category, Int>(DaoFactory.CategoryDAO) {
    override fun String.toModelKey() = this.toInt()
}