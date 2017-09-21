package com.kotlin.playground.kotlin.dao.model

import com.github.andrewoma.kwery.core.Session
import com.github.andrewoma.kwery.mapper.AbstractDao
import com.github.andrewoma.kwery.mapper.Column
import com.github.andrewoma.kwery.mapper.Table
import com.github.andrewoma.kwery.mapper.TableConfiguration
import com.github.andrewoma.kwery.mapper.Value

data class Category(
        val Id: Int,
        val CategoryName: String?,
        val Description: String?)

object CategoryTable : Table<Category, Int>("Category", TableConfiguration(namingConvention = { s -> s.removePrefix("_") })) {
    val _Id by col(Category::Id, true)
    val _CategoryName by col(Category::CategoryName)
    val _Description by col(Category::Description)
    
    override fun idColumns(id: Int) = setOf(_Id of id)

    override fun create(value: Value<Category>) = Category(value of _Id, value of _CategoryName, value of _Description)
}    

class CategoryDAO(session: Session) : AbstractDao<Category, Int>(session, CategoryTable, Category::Id)