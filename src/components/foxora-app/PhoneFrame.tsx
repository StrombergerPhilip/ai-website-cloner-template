export function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div
        className="relative w-[340px] rounded-[50px] border-[8px] px-5 py-6"
        style={{
          height: "700px",
          background: "var(--fxa-card)",
          borderColor: "#2A2620",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,107,26,0.1)",
        }}
      >
        <div
          aria-hidden
          className="absolute left-1/2 top-5 h-[6px] w-[100px] -translate-x-1/2 rounded-full"
          style={{ background: "#0a0907" }}
        />
        {children}
      </div>
    </div>
  );
}
