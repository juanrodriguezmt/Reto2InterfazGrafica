function consultar() {
    $.ajax(
             {
                url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
                type         : 'GET',
                dataType     : 'json',

                success      :  function(response){

                                    var misItems = response.items;
                                    $("#miResultado").empty();
                                    for (i=0; i < misItems.length; i++){
                                        
                                        $("#miResultado").append("<tr>");
                                        $("#miResultado").append("<td>" + misItems[i].id + "</td>");
                                        $("#miResultado").append("<td>" + misItems[i].brand + "</td>");
                                        $("#miResultado").append("<td>" + misItems[i].model + "</td>");
                                        $("#miResultado").append("<td>" + misItems[i].category_id + "</td>");
                                        $("#miResultado").append("<td>" + misItems[i].name + "</td>");
                                        $("#miResultado").append('<td><button onclick="borrar('+misItems[i].id+')">Borrar</button></td>');
                                        $("#miResultado").append('<td><button onclick="consultarEspecifico('+misItems[i].id+')">Consultar bicicleta</button></td>');
                                        $("#miResultado").append("</tr>");
                                    }
                                    
                                },

                 error       :  function(jqXHR, textStatus, errorThrown){
                                }


             }


          );
}

function registro() {

    var bicicleta;

    bicicleta = {
        id:$("#miId").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#categoryId").val(),
        name:$("#name").val()
        };

    $.ajax (
        {

            url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
            type         : 'POST',
            data         :  bicicleta,

            success      :  function(response){
                               console.log(response);
                            },
            error       :   function(jqXHR, textStatus, errorThrown){
                            }


        }
    );

}

function borrar(idElemento) {

    var bicicleta;

    bicicleta = {
        id:idElemento
    }
    datosEnvio   = JSON.stringify(bicicleta);

    $.ajax (
        {
            contentType  : 'application/json',
            data         :  datosEnvio,
            url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
            type         : 'DELETE',
            
            

            success      :  function(response){
                                console.log(response);

                            },
            error       :   function(jqXHR, textStatus, errorThrown){
                            }
        }
    );

}

function consultarEspecifico(idItem) {
    $.ajax(
             {
                url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike/'+ idItem,
                type         : 'GET',
                dataType     : 'json',      

                success      :  function(response){
                        console.log(response);
                        var item=response.items[0];
                        $("#miId").val(item.id);
                        $("#brand").val(item.brand);
                        $("#model").val(item.model);
                        $("#categoryId").val(item.category_id);
                        $("#name").val(item.name);
                                    
                                    
                                },

                 error       :  function(jqXHR, textStatus, errorThrown){
                                }


             }


          );
}

function actualizar() {

    var bicicleta = {
        id:$("#miId").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#categoryId").val(),
        name:$("#name").val()
        };

        var datosEnvio   = JSON.stringify(bicicleta);

    $.ajax (
        {
            dataType     : 'json',
            data         :  datosEnvio,
            contentType  : 'application/json',
            url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/bike/bike',
            type         : 'PUT',
            

            success      :  function(response){
                               console.log(response);
                            },
            error       :   function(jqXHR, textStatus, errorThrown){
                            }


        }
    );



}


function consultarCliente() {
    $.ajax(
             {
                url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
                type         : 'GET',
                dataType     : 'json',

                success      :  function(response){

                                    var misItems = response.items;
                                    $("#miResultado2").empty();
                                    for (i=0; i < misItems.length; i++){
                                        
                                        $("#miResultado2").append("<tr>");
                                        $("#miResultado2").append("<td>" + misItems[i].id + "</td>");
                                        $("#miResultado2").append("<td>" + misItems[i].name + "</td>");
                                        $("#miResultado2").append("<td>" + misItems[i].email + "</td>");
                                        $("#miResultado2").append("<td>" + misItems[i].age + "</td>");
                                        $("#miResultado2").append('<td><button onclick="borrarCliente('+misItems[i].id+')">Borrar</button></td>');
                                        $("#miResultado2").append('<td><button onclick="consultarEspecificoCliente('+misItems[i].id+')">Consultar cliente</button></td>');
                                        $("#miResultado2").append("</tr>");
                                    }
                                    
                                },

                 error       :  function(jqXHR, textStatus, errorThrown){
                                }


             }


          );
}


function registroCliente() {

    var cliente;

    cliente = {
        id:$("#miId2").val(),
        name:$("#name2").val(),
        email:$("#email").val(),
        age:$("#age").val()

        };

    $.ajax (
        {

            url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'POST',
            data         :  cliente,

            success      :  function(response){
                               console.log(response);
                            },
            error       :   function(jqXHR, textStatus, errorThrown){
                            }


        }
    );

}

function borrarCliente(idElemento1) {

    var cliente;

    cliente = {
        id:idElemento1
    }
    var datosEnvio   = JSON.stringify(cliente);

    $.ajax (
        {
            contentType  : 'application/json',
            data         :  datosEnvio,
            url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'DELETE',
            
            

            success      :  function(response){
                                console.log(response);

                            },
            error       :   function(jqXHR, textStatus, errorThrown){
                            }
        }
    );

}

function consultarEspecificoCliente(idItem1) {
    $.ajax(
             {
                url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/'+ idItem1,
                type         : 'GET',
                dataType     : 'json',      

                success      :  function(response){
                        console.log(response);
                        var item=response.items[0];
                        $("#miId2").val(item.id);
                        $("#name2").val(item.name);
                        $("#email").val(item.email);
                        $("#age").val(item.age);
                        
                                    
                                    
                                },

                 error       :  function(jqXHR, textStatus, errorThrown){
                                }


             }


          );
}

function actualizarCliente() {

    var cliente = {
        id:$("#miId2").val(),
        name:$("#name2").val(),
        email:$("#email").val(),
        age:$("#age").val()
        };

        var datosEnvio   = JSON.stringify(cliente);

    $.ajax (
        {
            dataType     : 'json',
            data         :  datosEnvio,
            contentType  : 'application/json',
            url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client',
            type         : 'PUT',
            

            success      :  function(response){
                               console.log(response);
                            },
            error       :   function(jqXHR, textStatus, errorThrown){
                            }


        }
    );



}

function consultarMensaje() {
    $.ajax(
             {
                url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
                type         : 'GET',
                dataType     : 'json',

                success      :  function(response){

                                    var misItems = response.items;
                                    $("#miResultado3").empty();
                                    for (i=0; i < misItems.length; i++){
                                        
                                        $("#miResultado3").append("<tr>");
                                        $("#miResultado3").append("<td>" + misItems[i].id + "</td>");
                                        $("#miResultado3").append("<td>" + misItems[i].messagetext + "</td>");
                                        $("#miResultado3").append('<td><button onclick="borrarMensaje('+misItems[i].id+')">Borrar</button></td>');
                                        $("#miResultado3").append('<td><button onclick="consultarEspecificoMensaje('+misItems[i].id+')">Consultar mensaje</button></td>');
                                        $("#miResultado3").append("</tr>");
                                    }
                                    
                                },

                 error       :  function(jqXHR, textStatus, errorThrown){
                                }


             }


          );
}


function registroMensaje() {

    var mensaje;

    mensaje = {
        id:$("#miId3").val(),
        messagetext:$("#messagetext").val(),

        };

    $.ajax (
        {

            url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
            type         : 'POST',
            data         :  mensaje,

            success      :  function(response){
                               console.log(response);
                            },
            error       :   function(jqXHR, textStatus, errorThrown){
                            }


        }
    );

}

function borrarMensaje(idElemento2) {

    var mensaje;

    mensaje = {
        id:idElemento2
    }
    var datosEnvio   = JSON.stringify(mensaje);

    $.ajax (
        {
            contentType  : 'application/json',
            data         :  datosEnvio,
            url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
            type         : 'DELETE',
            
            

            success      :  function(response){
                                console.log(response);

                            },
            error       :   function(jqXHR, textStatus, errorThrown){
                            }
        }
    );

}

function consultarEspecificoMensaje(idItem2) {
    $.ajax(
             {
                url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message/'+ idItem2,
                type         : 'GET',
                dataType     : 'json',      

                success      :  function(response){
                        console.log(response);
                        var item=response.items[0];
                        $("#miId3").val(item.id);
                        $("#messagetext").val(item.messagetext);
                                },

                 error       :  function(jqXHR, textStatus, errorThrown){
                                }


             }


          );
}

function actualizarMensaje() {

    var mensaje = {
        id:$("#miId3").val(),
        messagetext:$("#messagetext").val(),
        };

        var datosEnvio   = JSON.stringify(mensaje);

    $.ajax (
        {
            dataType     : 'json',
            data         :  datosEnvio,
            contentType  : 'application/json',
            url          : 'https://g534c7ef945e7dc-bdreto1.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message',
            type         : 'PUT',
            

            success      :  function(response){
                               console.log(response);
                            },
            error       :   function(jqXHR, textStatus, errorThrown){
                            }


        }
    );



}