"use client"

import { useEffect, useRef } from 'react';
import './styles.css'
import Link from 'next/link';
import withAuth from '@/lib/auth'
import Script from 'next/script';

function About() {
    const canvasMesRef = useRef(null);
    const canvasSemanaRef = useRef(null);

    const rentasPorMesChart = useRef(null);
    const rentasPorSemanaChart = useRef(null);

    useEffect(() => {
        // Gráfico de Rentas por Mes
        const ctxMes = canvasMesRef.current.getContext('2d');
        rentasPorMesChart.current = new Chart(ctxMes, {
            type: 'line',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril',
                    'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
                    'Octubre', 'Noviembre', 'Diciembre'],
                datasets: [{
                    label: 'Rentas',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Gráfico de Rentas por Semana
        const ctxSemana = canvasSemanaRef.current.getContext('2d');
        rentasPorSemanaChart.current = new Chart(ctxSemana, {
            type: 'line',
            data: {
                labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
                datasets: [{
                    label: 'Rentas',
                    data: Array(4).fill(0),
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        return () => {
                rentasPorMesChart.current.destroy();
                rentasPorSemanaChart.current.destroy();
        };

    }, [])


    return (
        <>
        <div>
            <div class="container">
                <h1>Panel de Administración</h1>
                <p>Reportes.</p>
                <div class="card-container">
                    <div class="card card-usuarios">
                        <i class="fas fa-user"></i>
                        <h2>Usuarios</h2>
                        <div class="badge">1</div>
                        <Link href="/dashboard/users">Ver detalle</Link>
                    </div>
                    <div class="card card-clientes">
                        <i class="fas fa-users"></i>
                        <h2>Clientes</h2>
                        <div class="badge">1</div>
                        <Link href="/dashboard/customers">Ver detalle</Link>
                    </div>
                    <div class="card card-vehiculos">
                        <i class="fas fa-car"></i>
                        <h2>Vehículos</h2>
                        <div class="badge">0</div>
                        <Link href="/dashboard/vehicles">Ver detalle</Link>
                    </div>
                    <div class="card card-tipos">
                        <i class="fas fa-tags"></i>
                        <h2>Tipos</h2>
                        <div class="badge">8</div>
                        <a href="#">Ver detalle</a>
                    </div>
                </div>
                <div class="chart-container">
                    <div class="chart">
                        <h2>Rentas Por Mes</h2>
                        <canvas ref={canvasMesRef} id="rentasPorMes"></canvas>
                    </div>
                    <div class="chart">
                        <h2>Rentas Por Semana</h2>
                        <canvas ref={canvasSemanaRef} id="rentasPorSemana"></canvas>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default withAuth(About)