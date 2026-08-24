import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const srcImg = "C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\702ffa7d-11f0-4dac-8fb3-aaee9f55f64f\\.user_uploaded\\media_1787565050620.jpg";
  const destImg = path.join(process.cwd(), "public", "media", "hero-bg.jpg");

  try {
    if (fs.existsSync(srcImg)) {
      fs.copyFileSync(srcImg, destImg);
      return NextResponse.json({ success: true, message: "Copied hero-bg.jpg successfully" });
    } else {
      return NextResponse.json({ success: false, message: "Source image not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
