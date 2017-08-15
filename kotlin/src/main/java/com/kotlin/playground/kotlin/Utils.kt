package com.kotlin.playground.kotlin

import freemarker.template.Configuration
import freemarker.template.Version
import java.io.StringWriter

object TemplateUtil {
    val config = Configuration(Version(2, 3, 0))

    init {
        config.setClassForTemplateLoading(this::class.java, "/")
    }

    public fun render(templatePath: String, parms: Map<Any, Any>?): StringWriter {
        val writer = StringWriter()
        val template = config.getTemplate(templatePath)
        template.process(parms, writer)
        return writer
    }
}