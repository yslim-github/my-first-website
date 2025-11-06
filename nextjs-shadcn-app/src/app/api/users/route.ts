import { NextResponse } from "next/server";

// Simulated user data
const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    role: "Admin",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    status: "active",
    role: "User",
    createdAt: "2024-01-20",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    status: "pending",
    role: "User",
    createdAt: "2024-01-22",
  },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();

  // Simulate creating a new user
  const newUser = {
    id: String(users.length + 1),
    ...body,
    createdAt: new Date().toISOString().split("T")[0],
  };

  users.push(newUser);

  return NextResponse.json(newUser, { status: 201 });
}
