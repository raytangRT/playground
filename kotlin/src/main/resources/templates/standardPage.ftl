<#ftl strip_whitespace = true>
<#macro standardPage title="">

<#assign charset="UTF-8">
<#assign title="Example">
<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
        <meta charset="${charset}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            #header {
                background: red; /* For browsers that do not support gradients */
                background: -webkit-linear-gradient(right,rgba(0, 68, 255, 0.67),rgba(0, 68, 255, 1); /*Safari 5.1-6*/
                background: -o-linear-gradient(left,rgba(0, 68, 255, 0.67),rgba(0, 68, 255, 1); /*Opera 11.1-12*/
                background: -moz-linear-gradient(left,rgba(0, 68, 255, 0.67),rgba(0, 68, 255, 1); /*Fx 3.6-15*/
                background: linear-gradient(to left, rgba(0, 68, 255, 0.67), rgba(0, 68, 255, 1); /*Standard*/
              }
              #footer {
                background: red; /* For browsers that do not support gradients */
                background: -webkit-linear-gradient(right,rgba(0, 68, 255, 0.67),rgba(0, 68, 255, 1); /*Safari 5.1-6*/
                background: -o-linear-gradient(left,rgba(0, 68, 255, 0.67),rgba(0, 68, 255, 1); /*Opera 11.1-12*/
                background: -moz-linear-gradient(left,rgba(0, 68, 255, 0.67),rgba(0, 68, 255, 1); /*Fx 3.6-15*/
                background: linear-gradient(to left, rgba(0, 68, 255, 0.67), rgba(0, 68, 255, 1); /*Standard*/
              }
        </style>
        </head>
    <body>
        <div id="header" style="position:absolute; top:0px; left:0px; height:5%; right:0px;overflow:hidden;"> 
            <h3>Header</h3>
            </div> 
        <div id="content" style="position:absolute; top:5%; bottom:5%; left:0px; right:0px; overflow:auto;"> 
            <#nested />
            </div> 
        <div id="footer" style="position:absolute; bottom:0px; height:5%; left:0px; right:0px; overflow:hidden;"> 
            <h3>Footer</h3>
            </div>
        </body>
    </html>
</#macro>