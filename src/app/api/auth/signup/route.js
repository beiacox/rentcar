const { NextResponse } = require("next/server");
import db from '@/lib/db'
import bcrypt from 'bcrypt'

export async function POST(req) {
    try {
        const data = await req.json();
        console.log(data);

        const emailFound = await db.credenciales.findUnique({
            where: {
                email: data.email
            }
        })
        console.log(emailFound)

        if (!!emailFound) {
            return NextResponse.json({ message: "Email already exists" }, {
                status: 400
            })
        }

        const usernameFound = await db.credenciales.findUnique({
            where: {
                username: data.username
            }
        })

        if (!!usernameFound) {
            return NextResponse.json({ message: "Username already exists"}, {
                status: 400
            })
        }

        const hashedPass = await bcrypt.hash(data.password, 10);
        const newUSer = await db.credenciales.create({
            data: {
                username: data.username,
                email: data.email,
                password: hashedPass
            }
        })

        const { password: _, ...user } = newUSer;

        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}