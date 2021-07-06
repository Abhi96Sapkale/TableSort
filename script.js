function sortTableAsc() {
            var table, rows, switching, i, x, y, shouldSwitch,columnno;
            columnno=document.getElementById("column").value;
            table = document.getElementById("booktable");
            switching = true;
            while (switching) {
                switching = false;
                rows = table.rows;
                for (i = 1; i < (rows.length - 1); i++) {
                    shouldSwitch = false;
                    x = rows[i].getElementsByTagName("TD")[columnno];
                    y = rows[i + 1].getElementsByTagName("TD")[columnno];
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
            }
        }
        function sortTableDesc(){
            var table, rows, switching, i, x, y, shouldSwitch,columnno;
            columnno=document.getElementById("column").value;
            table = document.getElementById("booktable");
            switching = true;
            while (switching) {
                switching = false;
                rows = table.rows;
                for (i = 1; i < (rows.length - 1); i++) {
                    shouldSwitch = false;
                    x = rows[i].getElementsByTagName("TD")[columnno];
                    y = rows[i + 1].getElementsByTagName("TD")[columnno];
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                    switching = true;
                }
            }
        }