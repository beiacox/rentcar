"use client"

import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import "./styles.css"


export default function Reservas() {
    const [data, setData] = useState({}); // Estado para almacenar los datos
    const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga

    const tbodyRef = useRef(null);
    const tableRef = useRef(null);
    const searchInputRef = useRef(null);
    const paginationInfoRef = useRef(null);
    const entriesRef = useRef(null);

    useEffect(() => {
        fetch("http://localhost:3000/api/reservas")
            .then(d => d.json())
            .then(d => {
                setData(d);
                setLoading(false)
            });

        let rowId = 1;
        let currentPage = 1;
        let rowsPerPage = 10;
        let notificationCount = 0;


        // function addRow() {
        //     // const table = document.getElementById("data-table").getElementsByTagName("tbody")[0];
        //     const newRow = tbodyRef.current.insertRow();
        //     newRow.innerHTML = `
        //         <td>${rowId}</td>
        //         <td>Garantía ${rowId}</td>
        //         <td>Cliente ${rowId}</td>
        //         <td>Vehículo ${rowId}</td>
        //         <td>Placa ${rowId}</td>
        //         <td>Modelo ${rowId}</td>
        //         <td>Año ${rowId}</td>
        //         <td>Préstamo ${rowId}</td>
        //         <td>Devolución ${rowId}</td>
        //         <td>Cantidad ${rowId}</td>
        //         <td>Monto ${rowId}</td>
        //         <td class="actions">
        //             <button class="edit" onClick="editRow(this)">✏️</button>
        //             <button class="delete" onClick="deleteRow(this)">🗑️</button>
        //         </td>
        //     `;
        //     rowId++;
        //     paginateTable();
        // }

        // function deleteRow(button) {
        //     const row = button.closest("tr");
        //     row.remove();
        //     paginateTable();
        // }

        // function editRow(button) {
        //     const row = button.closest("tr");
        //     const cells = row.getElementsByTagName("td");
        //     for (let i = 1; i < cells.length - 1; i++) {
        //         cells[i].contentEditable = true;
        //     }
        //     button.innerHTML = "💾";
        //     button.setAttribute("onClick", "saveRow(this)");
        // }

        // function saveRow(button) {
        //     const row = button.closest("tr");
        //     const cells = row.getElementsByTagName("td");
        //     for (let i = 1; i < cells.length - 1; i++) {
        //         cells[i].contentEditable = false;
        //     }
        //     button.innerHTML = "✏️";
        //     button.setAttribute("onClick", "editRow(this)");
        // }

        // function printTable() {
        //     window.print();
        // }

        // function exportToExcel() {
        //     // const table = document.getElementById("data-table");
        //     const table = tableRef.current;
        //     const workbook = XLSX.utils.table_to_book(table, {
        //         sheet: "Sheet 1"
        //     });
        //     XLSX.writeFile(workbook, "table.xlsx");
        // }

        // function searchTable() {
        //     const input = searchInputRef.current;
        //     const filter = input.value.toLowerCase();
        //     // const table = document.getElementById("data-table");
        //     const table = tableRef.current;
        //     const rows = table.getElementsByTagName("tr");

        //     for (let i = 1; i < rows.length; i++) {
        //         const cells = rows[i].getElementsByTagName("td");
        //         let match = false;
        //         for (let j = 0; j < cells.length - 1; j++) {
        //             if (cells[j]) {
        //                 const cellText = cells[j].textContent || cells[j].innerText;
        //                 if (cellText.toLowerCase().indexOf(filter) > -1) {
        //                     match = true;
        //                     break;
        //                 }
        //             }
        //         }
        //         if (match) {
        //             rows[i].style.display = "";
        //         } else {
        //             rows[i].style.display = "none";
        //         }
        //     }
        // }

        // searchInputRef.current.addEventListener("keyup", searchTable);

        // function changePage(direction) {
        //     currentPage += direction;
        //     paginateTable();
        // }

        // function paginateTable() {
        //     // const table = document.getElementById("data-table");
        //     const table = tableRef.current;
        //     const rows = table.getElementsByTagName("tr");
        //     const paginationInfo = paginationInfoRef.current;

        //     let start = (currentPage - 1) * rowsPerPage + 1;
        //     let end = start + rowsPerPage - 1;

        //     for (let i = 1; i < rows.length; i++) {
        //         if (i < start || i > end) {
        //             rows[i].style.display = "none";
        //         } else {
        //             rows[i].style.display = "";
        //         }
        //     }

        //     paginationInfo.textContent = `Mostrando registros del ${start} al ${Math.min(end, rows.length - 1)} de un total de ${rows.length - 1} registros`;
        // }

        // entriesRef.current.addEventListener("change", function () {
        //     rowsPerPage = parseInt(this.value);
        //     currentPage = 1;
        //     paginateTable();
        // });

        // document.getElementById("campana-btn").addEventListener("click", function () {
        //     const notificationContainer = document.getElementById("notification-container");
        //     notificationContainer.style.display = notificationContainer.style.display === "none" ? "block" : "none";
        // });

        // function addNotification(message) {
        //     const notificationContainer = document.getElementById("notification-container");
        //     const newNotification = document.createElement("div");
        //     newNotification.classList.add("notification");
        //     newNotification.textContent = message;
        //     notificationContainer.appendChild(newNotification);
        //     updateNotificationCount();
        // }

        // function updateNotificationCount() {
        //     notificationCount++;
        //     document.getElementById("notification-count").textContent = notificationCount;
        // }

        // document.addEventListener("DOMContentLoaded", function () {
        //     addNotification("Bienvenido al panel de administración.");
        // });
    }, [])
    return (
        <div className="p-3">
            <Head>
                <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.4.0/jspdf.umd.min.js"></script>
                <script defer src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
                <script defer src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js"></script>
            </Head>

            <div className="container">
                <div className="show-entries flex justify-between w-7">
                    <label htmlFor="entries">Mostrar</label>
                    <select id="entries" ref={entriesRef}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="Todos">Todos</option>
                    </select>
                    <label htmlFor="entries">registros</label>
                </div>

                <div className="search-container">
                    <input type="text" id="search" ref={searchInputRef} placeholder="Buscar..." />
                    <i className="fas fa-search"></i>
                </div>

                <div className="export-buttons">
                    <button className="green" onClick={() => console.log("exportToExcel()")}><i className="fas fa-file-excel"></i> Excel</button>
                    <button onClick={() => console.log("printTable()")}><i className="fas fa-print"></i> Imprimir</button>
                </div>

                <div className="table-container">
                    <table id="data-table" ref={tableRef}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Cliente</th>
                                <th>Fecha de inicio</th>
                                <th>localizacion de entrega</th>
                                <th>Fecha de final</th>
                                <th>localizacion de devuelta</th>
                                <th>Vehiculo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody ref={tbodyRef}>
                            {
                                !loading && data.reservas.map((reserva, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{reserva.clienteId}</td>
                                        <td>{reserva.pickupDate}</td>
                                        <td>{reserva.pickupLocation}</td>
                                        <td>{reserva.returnDate}</td>
                                        <td>{reserva.returnLocation}</td>
                                        <td>{reserva.vehiculoId}</td>
                                        <td class="actions">
                                            <button class="edit" >✏️</button>
                                            <button class="delete">🗑️</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    <p ref={paginationInfoRef}>Mostrando registros del 0 al 0 de un total de 0 registros</p>
                </div>
                <div class="pagination">
                    <button id="prevPage" onClick={() => console.log("changePage(-1)")}>Anterior</button>
                    <button id="nextPage" onClick={() => console.log("changePage(1)")}>Siguiente</button>
                </div>
            </div>
        </div>
    )
}