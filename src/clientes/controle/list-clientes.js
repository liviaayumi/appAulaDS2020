$(document).ready(function() {
    $('#table-clientes').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/clientes/modelo/list-clientes.php",
            "type": "POST"
        },
        "language": {
            "url": "libs/DataTables/dataTables.brazil.json"
        },
        "columns": [{
                "data": "idclientes",
                "className": "text-center"
            }, 
            {
                "data": "nome",
                "className": "text-center"
            },
            {
                "data": "datamodificacao",
                "className": "text-center"
            },
            {
                "data": "ativo",
                "className": "text-center"
            },
            {
                "data": "idclientes",
                "orderable": false,
                "serchable": false,
                "className": "text-center",
                "render": function(data, type, row, meta) {
                    return `
                    <button id="${data}" class="btn btn-info btn-sm btn-view"><i class="mdi mdi-eye"></i></button>
                    <button id="${data}" class="btn btn-primary btn-sm btn-edit"><i class="mdi mdi-pencil"></i></button>
                    <button id="${data}" class="btn btn-danger btn-sm btn-delete"><i class="mdi mdi-trash-can"></i></button>
                    `
                }
            }
        ]
    })
})