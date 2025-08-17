// black_bishop.jsx
export default function WhiteBishop({ file, rank }) {
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
      aria-label="black bishop"
    >
      <svg viewBox="0 0 45 45" width="100%" height="100%">
        <g fill="#fff" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="22.5" cy="11.5" r="4.2" />
          <path d="M19 9 L26 14" fill="none" />
          <path d="M22.5 16c-5 0-8 5-8 9 0 3.5 1.6 5.9 4.2 8.2h7.6C28.9 30.9 30.5 28.5 30.5 25c0-4-3-9-8-9z" />
          <ellipse cx="22.5" cy="27.2" rx="7.5" ry="2.3" />
          <rect x="14.5" y="30.5" width="16" height="3.5" rx="1.8" />
          <rect x="12" y="34.5" width="21" height="4" rx="2" />
        </g>
      </svg>
    </div>
  );
}
