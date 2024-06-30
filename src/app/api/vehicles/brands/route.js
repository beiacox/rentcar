const { NextResponse } = require("next/server");
import db from '@/lib/db';

export async function GET(req){
    try {
        const users = await db.marcas.findMany();
        console.log(users)
        return NextResponse.json({users});
    } catch (error) {
        console.log(error)
        return NextResponse.json({error});
    }
}