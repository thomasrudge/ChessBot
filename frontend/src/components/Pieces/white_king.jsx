// white_king.jsx
export default function WhiteKing({ file, rank }) {
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
      aria-label="white king"
    >
      <svg viewBox="0 0 45 45" width="100%" height="100%">
        <g fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {/* cross (black fill for visibility) */}
          <rect x="21.5" y="8.0" width="2" height="5" fill="#000" stroke="none" />
          <rect x="19.0" y="10.0" width="7" height="2" fill="#000" stroke="none" />
          {/* head */}
          <circle cx="22.5" cy="14.5" r="3.2" />
          {/* collar */}
          <ellipse cx="22.5" cy="18.8" rx="6.2" ry="1.8" />
          {/* upper body */}
          <rect x="16.2" y="20.5" width="12.6" height="7.8" rx="2" />
          {/* lower robe */}
          <path d="M16 28.3 L29 28.3 L30.5 31.6 L14.5 31.6 Z" />
          {/* double base */}
          <rect x="14.5" y="31.6" width="16" height="3.0" rx="1.6" />
          <rect x="12.0" y="35.2" width="21.0" height="3.6" rx="2.0" />
        </g>
      </svg>
    </div>
  );
}
