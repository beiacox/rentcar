import { NextResponse } from "next/server"
import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import db from '@/lib/db'

export async function POST(request) {
    const formData = await request.formData();
    const file = formData.get('file');

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filePath = path.join(process.cwd(), 'public', 'uploads', file.name);
    writeFile(filePath, buffer)

    await db.vehiculos.create({
        data: {
            tipo: formData.get('tipo'),
            modelo: formData.get('modelo'),
            asientos: parseInt(formData.get('asientos')),
            transmision: formData.get('transmision'),
            equipaje: formData.get('equipaje'),
            combustible: formData.get('combustible'),
            precio_dia: parseFloat(formData.get('precio_dia')),
            foto: `/uploads/${file.name}`,
            placa: formData.get('placa'),
            kilometraje: 'prueba',
            id_marca: parseInt(formData.get('marca')),
            precio_mes: 0.0,
        },
    });
    return NextResponse.json({ filePath: `/uploads/${file.name}` })
}

