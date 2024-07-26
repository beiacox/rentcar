const { NextResponse } = require("next/server");
import db from '@/lib/db';

export async function GET(req){
    try {
        const marcas = await db.marcas.findMany();
        console.log(marcas)
        return NextResponse.json({marcas});
    } catch (error) {
        console.log(error)
        return NextResponse.json({error});
    }
}