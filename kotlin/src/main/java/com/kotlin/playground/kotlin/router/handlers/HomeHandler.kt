
package com.kotlin.playground.kotlin.router.handlers

import spark.Request
import spark.Response

object HomeHandler {
    val homePage = { _: Request, _: Response -> "Hello" }
}