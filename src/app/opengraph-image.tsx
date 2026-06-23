import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Foxora — Start Kit · v2.0 · AT GmbH × Dubai FZE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(238,120,72,0.22), transparent 65%), #0e0d0c",
          color: "#fafaf7",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: -0.5,
            color: "rgba(250,250,247,0.7)",
          }}
        >
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#ee7848",
            }}
          />
          Foxora
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 32,
              color: "#ee7848",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Start Kit · v2.0
          </div>
          <div
            style={{
              fontSize: 112,
              fontWeight: 600,
              letterSpacing: -5,
              lineHeight: 0.95,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Foxora Start.</span>
            <span>Die nächsten 180 Tage.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 26,
            color: "rgba(250,250,247,0.65)",
          }}
        >
          <div style={{ display: "flex", gap: 32 }}>
            <span>AT GmbH · Klagenfurt</span>
            <span>×</span>
            <span>Dubai FZ-LLC · DMCC</span>
          </div>
          <div style={{ color: "#ee7848" }}>100 % Cap. Punkt.</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
