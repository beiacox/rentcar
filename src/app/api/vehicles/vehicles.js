// pages/api/vehiculos.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Maneja la solicitud GET para obtener la lista de vehículos
    const vehiculos = await prisma.vehiculos.findMany();
    res.status(200).json(vehiculos);
  } else if (req.method === "POST") {
    // Maneja la solicitud POST para añadir un nuevo vehículo
    const {
      placa,
      precio_hora,
      precio_dia,
      precio_mes,
      modelo,
      kilometraje,
      transmision,
      asientos,
      equipaje,
      combustible,
      foto,
      estado,
      id_tipo,
      id_marca,
    } = req.body;
    const nuevoVehiculo = await prisma.vehiculos.create({
      data: {
        placa,
        precio_hora,
        precio_dia,
        precio_mes,
        modelo,
        kilometraje,
        transmision,
        asientos,
        equipaje,
        combustible,
        foto,
        estado,
        id_tipo,
        id_marca,
      },
    });
    res.status(201).json(nuevoVehiculo);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
