// WhiteQueen.jsx
export default function BlackQueen({ file, rank }) {
  const f = String(file).trim().charAt(0).toLowerCase();
  const r = Number(String(rank).trim());

  let x = 0;
  if (f === 'a') x = 0;
  else if (f === 'b') x = 100;
  else if (f === 'c') x = 200;
  else if (f === 'd') x = 300;
  else if (f === 'e') x = 400;
  else if (f === 'f') x = 500;
  else if (f === 'g') x = 600;
  else if (f === 'h') x = 700;

  let y = 0;
  if (r === 8) y = 0;
  else if (r === 7) y = 100;
  else if (r === 6) y = 200;
  else if (r === 5) y = 300;
  else if (r === 4) y = 400;
  else if (r === 3) y = 500;
  else if (r === 2) y = 600;
  else if (r === 1) y = 700;

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
      aria-label="white queen"
    >
      <svg viewBox="0 0 45 45" width="100%" height="100%">
        <g fill="#000" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* crown jewels */}
          <circle cx="12" cy="11" r="1.7" />
          <circle cx="18" cy="8.5" r="1.9" />
          <circle cx="22.5" cy="7" r="2.2" />
          <circle cx="27" cy="8.5" r="1.9" />
          <circle cx="33" cy="11" r="1.7" />
          {/* crown curve */}
          <path d="M12 11 Q22.5 14 33 11" fill="none" />

          {/* connectors to top jewels */}
          <path d="M22.5 13 Q19 10 18 8.5" fill="none" />
          <path d="M22.5 13 Q22.5 10 22.5 7" fill="none" />
          <path d="M22.5 13 Q26 10 27 8.5" fill="none" />

          {/* body, proportionally similar to bishop */}
          <path d="
            M15 13
            Q19 15 20.5 18
            Q21.2 19.8 21.2 21.5
            Q21.2 23.5 19.5 25
            Q17.5 26.5 14.5 27.5
            L14.5 28
            L30.5 28
            L30.5 27.5
            Q27.5 26.5 25.5 25
            Q23.8 23.5 23.8 21.5
            Q23.8 19.8 24.5 18
            Q26 15 30 13
            Q25 14 22.5 14
            Q20 14 15 13 Z
          " />

          {/* sash band */}
          <rect x="14.5" y="29.5" width="16" height="2.6" rx="1.3" />
          {/* pedestal same style as bishop */}
          <rect x="13" y="32.5" width="19" height="3" rx="1.5" />
          <rect x="11" y="36" width="23" height="4" rx="2" />
        </g>
      </svg>
    </div>
  );
}
