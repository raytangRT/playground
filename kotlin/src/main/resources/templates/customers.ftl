<#ftl strip_whitespace = true>

<#assign charset="UTF-8">
<#assign title="Example">
<#include "standardPage.ftl"/>

<@standardPage title="Customers">
    <table border="2" stylesheet=".row1 { background-color: lightGrey }">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Fax</th>
                    </tr>
                </thead>
            <tbody>
            <#list customers as customer>
                <tr class="${customer?item_cycle('row1', 'row2')}">
                    <td>${customer.id!""}</td>
                    <td>${customer.companyName!""}</td>
                    <td>${customer.contactName!""}</td>
                    <td>${customer.contactTitle!""}</td>
                    <td>${customer.address!""}</td>
                    <td>${customer.phone!""}</td>
                    <td>${customer.fax!""}</td>
                    </tr>      
            </#list>       
                </tbody>
            </table>
</@standardPage>