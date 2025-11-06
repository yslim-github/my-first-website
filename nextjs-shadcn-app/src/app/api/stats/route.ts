import { NextResponse } from "next/server";

export async function GET() {
  // Simulated data - in production, this would come from a database
  const stats = {
    totalRevenue: 45231,
    activeUsers: 2350,
    sales: 12234,
    conversionRate: 24.5,
    revenueGrowth: 20.1,
    userGrowth: 180.1,
    salesGrowth: 19.0,
    conversionGrowth: 4.3,
  };

  return NextResponse.json(stats);
}
