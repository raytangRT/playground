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