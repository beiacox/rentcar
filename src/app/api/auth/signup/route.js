const { NextResponse } = require("next/server");
import db from '@/lib/db'
import bcrypt from 'bcrypt'

export async function POST(req) {
    try {
        const data = await req.json();

        const emailFound = await db.credenciales.findUnique({
            where: {
                correo: data.correo
            }
        })

        if (!!emailFound) {
            return NextResponse.json({ message: "Email already exists" }, {
                status: 400
            })
        }

        const usernameFound = await db.credenciales.findUnique({
            where: {
                usuario: data.usuario
            }
        })

        if (!!usernameFound) {
            return NextResponse.json({ message: "Username already exists" }, {
                status: 400
            })
        }

        const hashedPass = await bcrypt.hash(data.clave, 10);
        const newClient = await db.clientes.create({
            data: {
                nombre: data.nombre,
                telefono: data.telefono,
                direccion: data.direccion,
                fecha: new Date(),
                estado: 1,
                cedula: '',
            }
        })
        const newUSer = await db.credenciales.create({
            data: {
                usuario: data.usuario,
                correo: data.correo,
                clave: hashedPass,
                id_cliente: newClient.id
            }
        })

        const { clave: _, id_cliente: _1,  ...user } = newUSer;

        return NextResponse.json(newUSer)
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}