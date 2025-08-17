// white_rook_centered_squares.jsx
export default function WhiteRook({ file, rank }) {
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
      aria-label="white rook"
    >
      <svg viewBox="0 0 45 45" width="100%" height="100%">
        <g fill="#000" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="15" y="15.2" width="3" height="3" />
          <rect x="19" y="15.2" width="3" height="3" />
          <rect x="23" y="15.2" width="3" height="3" />
          <rect x="27" y="15.2" width="3" height="3" />
          <rect x="14.8" y="18.2" width="15.4" height="1.6" />
          <rect x="15.4" y="20" width="14.2" height="10.2" rx="1.1" />
          <rect x="14.5" y="31.6" width="16" height="3" rx="1.6" />
          <rect x="12" y="35.2" width="21" height="3.6" rx="2" />
        </g>
      </svg>
    </div>
  );
}
