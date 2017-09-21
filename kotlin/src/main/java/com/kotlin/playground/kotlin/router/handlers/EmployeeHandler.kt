package com.kotlin.playground.kotlin.router.handlers

import com.kotlin.playground.kotlin.dao.DaoFactory
import com.kotlin.playground.kotlin.dao.model.Employee
import com.kotlin.playground.kotlin.dao.model.EmployeeTerritory

object EmployeeHandler : AbstractHandler<Employee, Int>(DaoFactory.EmployeeDAO) {
    override fun String.toModelKey() = this.toInt()
}

object EmployeeTerritoryHandler : AbstractHandler<EmployeeTerritory, String>(DaoFactory.EmployeeTerritoryDAO) {
    override fun String.toModelKey() = this
}