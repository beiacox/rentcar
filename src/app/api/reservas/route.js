const { NextResponse } = require("next/server");
import db from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log(req);

    const CarFound = await db.reservas.findUnique({
      where: {
        vehiculoId: data.vehiculoId,
      },
      
    });
    
    if (!!CarFound) {
      return NextResponse.json(
        { message: "el auto ya esta alquilado" },
        {
          status: 400,
        }
      );
    }

    

    const hashedPass = await bcrypt.hash(data.vehiculoId, 10);
    const newReserva = await db.reservas.create({
      data: {
        pickupLocation: data.pickupLocation,
        returnLocation: data.returnLocatio,
        pickupDate: data.pickupDate,
        returnDate: data.returnDate,
        pickupTime: data.pickupTime,
        returnTime: data.returnTime,
        vehiculoId: data.vehiculoId,
        clienteId: data.clienteId,
        observacion: data.observacion,
      },
    });
    

    const { clave: _, clienteId: _1, ...user } = newReserva;

    return NextResponse.json(newReserva);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
