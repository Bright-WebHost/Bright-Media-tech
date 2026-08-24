import fs from "fs";
import path from "path";

const srcImg = "C:\\Users\\Lenovo\\.gemini\\antigravity-ide\\brain\\702ffa7d-11f0-4dac-8fb3-aaee9f55f64f\\.user_uploaded\\media_1787565050620.jpg";
const destImg = path.join(process.cwd(), "public", "media", "hero-bg.jpg");

try {
  if (fs.existsSync(srcImg)) {
    fs.copyFileSync(srcImg, destImg);
    console.log("Successfully copied hero-bg.jpg!");
  }
} catch (e) {
  console.error("Error copying hero-bg.jpg:", e);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: "asset/resource",
    });
    return config;
  },
};

export default nextConfig;
