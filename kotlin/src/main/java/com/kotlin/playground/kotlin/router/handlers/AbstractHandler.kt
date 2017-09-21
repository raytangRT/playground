package com.kotlin.playground.kotlin.router.handlers

import com.github.andrewoma.kwery.mapper.AbstractDao
import spark.Request
import spark.Response

abstract class AbstractHandler<Model, ModelKey>(val dao: AbstractDao<Model, ModelKey>)
where Model : Any, ModelKey : Any {

    public val listAll = { _: Request, _: Response -> dao.findAll() }

    public val listById = { request: Request, _: Response -> dao.findById(request.rq(":Id")) }

    private fun Request.rq(requestParm: String): ModelKey {
        return this.params(requestParm).toModelKey()
    }

    protected abstract fun String.toModelKey(): ModelKey
}