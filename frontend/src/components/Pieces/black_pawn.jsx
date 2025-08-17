// pawn_simple.jsx
export default function BlackPawn({ file, rank, color = "black" }) {
  const f = String(file).trim().charAt(0).toLowerCase();
  const r = Number(String(rank).trim());
  const isWhite = String(color).toLowerCase() === "white";
  const fill = isWhite ? "#fff" : "#000";
  const stroke = isWhite ? "#000" : "#fff";

  let x = 0;
  if (f === 'a') x = 0; else if (f === 'b') x = 100; else if (f === 'c') x = 200; else if (f === 'd') x = 300;
  else if (f === 'e') x = 400; else if (f === 'f') x = 500; else if (f === 'g') x = 600; else if (f === 'h') x = 700;

  let y = 0;
  if (r === 8) y = 0; else if (r === 7) y = 100; else if (r === 6) y = 200; else if (r === 5) y = 300;
  else if (r === 4) y = 400; else if (r === 3) y = 500; else if (r === 2) y = 600; else if (r === 1) y = 700;

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "12.5%",
        height: "12.5%",
        transform: `translate(${x}%, ${y}%)`,
      }}
      role="img"
      aria-label={`${isWhite ? "white" : "black"} pawn`}
    >
      <svg viewBox="0 0 45 45" width="100%" height="100%">
        <g fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="22.5" cy="15" r="4" />
          <rect x="17" y="20" width="11" height="10" rx="2" />
          <rect x="12.5" y="33" width="20" height="4" rx="2" />
        </g>
      </svg>
    </div>
  );
}
