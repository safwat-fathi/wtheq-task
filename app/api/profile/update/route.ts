import { User } from "@/types/models";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Awaited<User>;

    const { dob, name } = body;

    if (!name || !dob) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    return Response.json(
      { success: true, message: "Profile updated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return Response.json({ success: false, message: error }, { status: 500 });
  }
}
