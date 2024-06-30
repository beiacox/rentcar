const { NextResponse } = require("next/server");
import db from '@/lib/db';

export async function GET(req){
    try {
        const vehicles = await db.vehiculos.findMany();
        console.log(vehicles)
        return NextResponse.json({users: vehicles});
    } catch (error) {
        console.log(error)
        return NextResponse.json({error});
    }
}