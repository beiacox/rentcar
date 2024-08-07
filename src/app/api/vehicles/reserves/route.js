const { NextResponse } = require("next/server");
import db from '@/lib/db';

export async function GET(req) {
    try {
        const vehicles = await db.vehiculos.findMany({
            where: {
                estado: 1,
            },
        });
        console.log(vehicles)
        return NextResponse.json({ vehicles });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error });
    }
}