// white_knight.jsx
export default function WhiteKnight({ file, rank }) {
  const f = String(file).trim().charAt(0).toLowerCase();
  const r = Number(String(rank).trim());

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
      aria-label="white knight"
    >
      <svg viewBox="0 0 45 45" width="100%" height="100%">
        <g fill="#000" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* double base */}
          <rect x="14.6" y="31.6" width="16" height="3" rx="1.6" />
          <rect x="12" y="35.2" width="21" height="3.6" rx="2" />
          {/* horse head & neck */}
          <path d="M30 29 L16 29 L15.7 23.5
                   C15.6 21.5 16.4 19.7 18 18.5
                   L24 14.2 27.6 16.2 24.2 18.9
                   C26.7 19.3 28.4 20.2 29.6 21.6
                   C31.2 23.4 32 29 32 29 Z" />
          {/* muzzle/chin cut */}
          <path d="M24.2 18.9 L22 20.6" fill="none" />
          {/* ear */}
          <path d="M24.8 13 L27.2 15.2" />
          {/* eye */}
          <circle cx="25.2" cy="17" r="0.9" fill="#000" stroke="none" />
        </g>
      </svg>
    </div>
  );
}
