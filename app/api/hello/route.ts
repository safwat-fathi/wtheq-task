import { NextRequest } from "next/server";

export async function GET() {
  // return Response.json({ data: "Hello!" }, { status: 200 });
  return Response.json({ data: "Hello!" }, { status: 401 });
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");

    // console.log("🚀 ~ POST ~ req.json:", name, email);
    console.log("🚀 ~ POST ~ formData:", name, email);
    // console.log("🚀 ~ POST ~ formData:", formData);

    if (!name || !email) {
      // if (!data) {
      return Response.json({ message: "Invalid credentials" }, { status: 400 });
    }

    return Response.json({ data: "Hello!" }, { status: 200 });
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
}

export async function PUT(req: NextRequest) {
  try {
    const headersList = req.headers; // Map

    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const lang = headersList.get("accept-language");
    const token = headersList.get("authorization");
    // console.log("🚀 ~ headersList:", headersList);
    console.log("🚀 ~ lang:", lang);
    // console.log("🚀 ~ POST ~ req.json:", name, email);
    console.log("🚀 ~ POST ~ formData:", name, email);
    // console.log("🚀 ~ POST ~ formData:", formData);

    if (!token) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!name || !email) {
      // if (!data) {
      return Response.json({ message: "Invalid credentials" }, { status: 400 });
    }

    return Response.json({ d: "" }, { status: 200 });
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
}
