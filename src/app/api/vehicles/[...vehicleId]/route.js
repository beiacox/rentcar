const { NextResponse } = require("next/server");
import db from '@/lib/db';

export async function GET(request, context){
    try {
        const id = parseInt(context.params.vehicleId[0]);
        const vehicles = await db.vehiculos.findUnique({
            where: {
                id: id
            }
        })
        return NextResponse.json(vehicles);
    } catch (error) {
        console.log(error)
        return NextResponse.json({error});
    }
}