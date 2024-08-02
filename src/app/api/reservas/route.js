const { NextResponse } = require("next/server");
import db from "@/lib/db";

export async function GET(req) {
  try {
    const reservas = await db.reservas.findMany();
    console.log(reservas);
    return NextResponse.json({ reservas });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error });
  }
}
