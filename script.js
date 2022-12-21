$(document).ready(function () {
        var table = $('#tableClientes').DataTable();

        new $.fn.dataTable.Buttons(table, {
            buttons: [
                {
                    text: 'Imprimir',
                    extend: 'print',
                    header: false,
                    //messageTop: 'Impressão tabela'
                },
                {
                    text: 'Exportar Excel',
                    extend: 'excel'
                },
                {
                    text: 'Salvar PDF',
                    extend: 'pdf',
                    orientation: 'landscape',
                    Header: false
                },
                {
                    text: 'Visibilidade',
                    extend: 'colvis', fixedColumns: {
                        leftColumns: 2
                    }
                },
            ]

        });

        table.buttons(0, null).container().prependTo(
            table.table().container()
        );
    });
