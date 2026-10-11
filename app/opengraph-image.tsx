import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name}, ${site.area}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #1f7a41 0%, #16211b 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            padding: "14px 32px",
            borderRadius: 999,
            background: "white",
            color: "#1f7a41",
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          {site.shortName}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 36, opacity: 0.9 }}>{site.area}</div>
        </div>
      </div>
    ),
    size,
  );
}
