/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.kotlin.playground.kotlin.router.handlers

import com.kotlin.playground.kotlin.dao.DaoFactory
import com.kotlin.playground.kotlin.dao.model.Region

object RegionHandler : AbstractHandler<Region, Int>(DaoFactory.RegionDAO) {
    override fun String.toModelKey() = this.toInt()
}