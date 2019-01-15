﻿
GetAllTags()

//Abre/cierra los div de creación/eliminación de tags
function AbrirCerrar(orden) {

    console.log(orden);

    if (orden == "crear") {

        if ($('#crearTagDiv').is(':hidden')) {

            $('#crearTagDiv').show('slow');

        }
        else {

            $('#crearTagDiv').hide('slow');

        }

    }
    if (orden == "admin") {

        if ($('#adminTagDiv').is(':hidden')) {

            $('#adminTagDiv').show('slow');

        }
        else {

            $('#adminTagDiv').hide('slow');

        }
    }
    if (orden == "listaTags") {

        if ($('#TagContainerDiv').is(':hidden')) {

            $('#TagContainerDiv').show('slow');
            $('#TagContainerDiv').val('MOSTRAR LISTA');

        }
        else {

            $('#TagContainerDiv').hide('slow');
            $('#TagContainerDiv').val('OCULTAR LISTA');

        }
    }
}


function LogChar(char) {

    console.log(char);

}

function SaveTag() {

    $.ajax({

        url: "/DesktopModules/TagManager/WebService.aspx",
        dataType: "text",
        data:
        {

            saveTagIcono: icono,
            saveTagName: name

        },
        success: function (data) {

            if (data == 'true') {

                alert("Tag guardado con éxito");
            }
            else {

                alert("Tag NO guardado");

            }

        },
        error: function () {

        }

    });

}

function DeleteTag(tagId) {

    $.ajax({

        url: "/DesktopModules/TagManager/WebService.aspx",
        dataType: "text",
        data:
        {

            deleteTagId: tagId

        },
        success: function (data) {

            if (data == 'true') {

                GetAllTags()
            }
            else {

                alert("Fatal error: please contact with the on charge support service");

            }

        },
        error: function () {

        }

    });

}

function GetAllTags() {

    $.ajax({

        url: "/DesktopModules/TagManager/WebService.aspx",
        dataType: "json",
        data:
        {
            getAllTags : '%'
        },
        success: function (data) {

            $('#tablaTagsCreados').empty();
            $('#tablaTagsCreados').append(  "<tr>" +
                                                "<th>NOMBRE</th>" +
                                                "<th>ÍCONO</th>" +
                                            "</tr>")

            for (a = 0; a < data.length; a++) {

                $('#tablaTagsCreados').append(  "<tr>" +
                                                    "<td> " + data[a].NOMBRE + "</td>" +

                                                    "<td>" +
                                                        "<span style = 'font-family:\"Font Awesome 5 Pro\"; font-weight: 900;' >&#" + data[a].ICONO + "</span>" +
                                                    "</td>" +

                                                    "<td>" +
                                                        "<input type='button' value='ELIMINAR' onclick='DeleteTag(" + data[a].ID + ")'>" +
                                                    "</td>" +

                                                "</tr>")
            }                
        }
    });
}

////AJAX para recuperar la lista de tags ya creados
//function GetTagsCreados() {
//    $.ajax({
//        url: "/DesktopModules/TransferenciaStock/WebService.aspx",
//        success: function (data)
//        {
//            $('#tablaTagsCreados').empty();
//            $('#tablaTagsCreados').append('')
//            for (a = 0; a < data.length; a++) {
//                $('#tablaTagsCreados').append('<tr><td>' + data.NOMBRE + '</td><td>' + data.ICONO + '</td></tr>');
//            }
//        },
//        dataType: 'json',
//        data: {
//            tag: SearchTag(),
//        }
//    })
//}

//function searchtag() {

//    var searchstring = '%';

//    if ($('#buscadortagscreados').val() == "") {

//        searchstring = '%';
//    }
//    else {

//        searchstring = $('#buscadortagscreados').val();

//    }
//    return searchstring;
//}


