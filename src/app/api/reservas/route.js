const { NextResponse } = require("next/server");
import db from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);



    //se busca si el vehiculo esta en la lista de alquilados
    const CarFound = await db.reservas.findUnique({
      where: {
        vehiculoId: data.vehiculoId,
      },
    });



    //si el vehiculo ya esta en la lista se cancela la operacion
    if (!!CarFound) {
      return NextResponse.json(
        { message: "el auto ya esta alquilado" },
        {
          status: 400,
        }
      );
    }
    const CarPrice = await db.vehiculos.findUnique({
      where: {
        id: data.vehiculoId,
      },
    });



    //cambiando el estado del vehiculo
    try {
      const updatedVehicle = await db.vehiculos.update({
        where: { id: data.vehiculoId },
        data: { estado: 2 },
      });
      console.log("Vehicle status updated:", updatedVehicle);
    } catch (error) {
      console.error("Error updating vehicle status:", error);
      return NextResponse.json(
        { error: "Error updating vehicle status" },
        { status: 500 }
      );
    }



    //se calcula el precio en base al rango de fecha alquilado
    function calcularDiferenciaDias() {
      const inicio = new Date(data.pickupDate);
      const fin = new Date(data.returnDate);
      const diferenciaTiempo = fin - inicio;
      const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 3600 * 24));
      const costototal = diferenciaDias * CarPrice.precio_dia;

      return costototal;
    }



    //se crea el objeto de nueva reservas y se insertan los datos
    const newReserva = await db.reservas.create({
      data: {
        pickupLocation: data.pickupLocation,
        returnLocation: data.returnLocation,
        pickupDate: data.pickupDate,
        returnDate: data.returnDate,
        pickupTime: data.pickupTime,
        returnTime: data.returnTime,
        vehiculoId: data.vehiculoId,
        clienteId: data.clienteId,
        observacion: data.observacion,
        costoT: calcularDiferenciaDias(),
      },
    });


    
    return NextResponse.json(newReserva);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
