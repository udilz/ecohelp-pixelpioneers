import bcrypt from "bcrypt";
import { prisma } from "@/utils/prisma";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return Response.json({ message: "Account not found!" });
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return Response.json({ message: "Password invalid!" });
  }

  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, "nasigoreng", { expiresIn: "1d" });

  return new Response(JSON.stringify({ message: "Login success!" }), {
    status: 200,
    headers: {
      "Set-Cookie": `token=${token}`,
    },
  });
}
