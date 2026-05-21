const stroke = {
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Window({ x, y, size = 5 }: { x: number; y: number; size?: number }) {
  return (
    <rect
      x={x}
      y={y}
      width={size}
      height={size}
      fill="none"
      {...stroke}
    />
  );
}

function Tree({ x, ground = 88 }: { x: number; ground?: number }) {
  return (
    <g>
      <path d={`M${x} ${ground} L${x} ${ground - 14}`} {...stroke} />
      <path
        d={`M${x - 9} ${ground - 16} Q${x - 12} ${ground - 24} ${x - 6} ${ground - 26} Q${x} ${ground - 30} ${x + 6} ${ground - 26} Q${x + 12} ${ground - 24} ${x + 9} ${ground - 16} Z`}
        fill="none"
        {...stroke}
      />
    </g>
  );
}

function House({
  x,
  w = 34,
  h = 28,
  windows = 2,
  ground = 88,
}: {
  x: number;
  w?: number;
  h?: number;
  windows?: number;
  ground?: number;
}) {
  const roofPeak = ground - h - 10;
  return (
    <g>
      <path
        d={`M${x} ${ground - h} L${x + w / 2} ${roofPeak} L${x + w} ${ground - h} Z`}
        fill="none"
        {...stroke}
      />
      <path
        d={`M${x} ${ground - h} L${x} ${ground} L${x + w} ${ground} L${x + w} ${ground - h}`}
        fill="none"
        {...stroke}
      />
      {windows === 2 && (
        <>
          <Window x={x + 8} y={ground - h + 10} />
          <Window x={x + w - 13} y={ground - h + 10} />
        </>
      )}
      {windows === 4 && (
        <>
          <Window x={x + 6} y={ground - h + 8} />
          <Window x={x + w - 11} y={ground - h + 8} />
          <Window x={x + 6} y={ground - h + 18} />
          <Window x={x + w - 11} y={ground - h + 18} />
        </>
      )}
    </g>
  );
}

function Apartment({ x, ground = 88 }: { x: number; ground?: number }) {
  const h = 42;
  const w = 28;
  return (
    <g>
      <path
        d={`M${x} ${ground} L${x} ${ground - h} L${x + w} ${ground - h} L${x + w} ${ground}`}
        fill="none"
        {...stroke}
      />
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => (
          <Window
            key={`${row}-${col}`}
            x={x + 7 + col * 11}
            y={ground - h + 10 + row * 11}
          />
        )),
      )}
    </g>
  );
}

function SpeechBubble({
  cx,
  cy,
  r = 9,
  tailX,
  tailY,
}: {
  cx: number;
  cy: number;
  r?: number;
  tailX: number;
  tailY: number;
}) {
  return (
    <g fill="currentColor" stroke="none">
      <circle cx={cx} cy={cy} r={r} />
      <path d={`M${cx - 3} ${cy + r - 1} L${tailX} ${tailY} L${cx + 4} ${cy + r - 2} Z`} />
    </g>
  );
}

function Cloud({ x, y }: { x: number; y: number }) {
  return (
    <path
      fill="currentColor"
      stroke="none"
      d={`M${x} ${y + 6} C${x - 8} ${y + 2} ${x - 10} ${y - 6} ${x - 2} ${y - 8} C${x - 4} ${y - 16} ${x + 8} ${y - 18} ${x + 12} ${y - 10} C${x + 20} ${y - 12} ${x + 22} ${y - 2} ${x + 16} ${y + 4} C${x + 18} ${y + 10} ${x + 8} ${y + 12} ${x} ${y + 6} Z`}
    />
  );
}

export function NeighborhoodDivider() {
  const ground = 88;

  return (
    <div
      className="w-full overflow-hidden text-grannsam-green"
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative left-1/2 block h-auto w-[185vw] max-w-none min-h-[110px] -translate-x-1/2 sm:min-h-[140px] md:min-h-[175px] lg:min-h-[200px]"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Speech bubbles & clouds */}
        <SpeechBubble cx={55} cy={22} tailX={48} tailY={52} />
        <Cloud x={175} y={18} />
        <SpeechBubble cx={310} cy={28} r={8} tailX={305} tailY={58} />
        <Cloud x={480} y={14} />
        <SpeechBubble cx={620} cy={20} tailX={615} tailY={48} />
        <Cloud x={780} y={16} />
        <SpeechBubble cx={920} cy={24} r={9} tailX={915} tailY={54} />
        <Cloud x={1080} y={12} />
        <SpeechBubble cx={1260} cy={26} r={8} tailX={1255} tailY={56} />
        <Cloud x={1360} y={18} />

        {/* Ground line */}
        <path
          d={`M0 ${ground} C90 ${ground - 3} 180 ${ground + 2} 270 ${ground - 1} S450 ${ground + 3} 630 ${ground - 2} S810 ${ground + 2} 990 ${ground} S1170 ${ground - 3} 1320 ${ground + 1} 1440 ${ground}`}
          {...stroke}
        />

        {/* Left cluster */}
        <House x={24} windows={2} ground={ground} />
        <Tree x={78} ground={ground} />
        <Apartment x={98} ground={ground} />
        <Apartment x={132} ground={ground} />
        <House x={172} w={36} windows={4} ground={ground} />
        <Tree x={220} ground={ground} />

        {/* Crenellated tower */}
        <g>
          <path
            d={`M248 ${ground} L248 ${ground - 52} L268 ${ground - 52} L268 ${ground}`}
            fill="none"
            {...stroke}
          />
          <path
            d={`M246 ${ground - 52} L248 ${ground - 58} L252 ${ground - 52} M264 ${ground - 52} L266 ${ground - 58} L270 ${ground - 52}`}
            fill="none"
            {...stroke}
          />
          <path
            d={`M252 ${ground - 20} Q258 ${ground - 28} 264 ${ground - 20}`}
            fill="none"
            {...stroke}
          />
          <path
            d={`M252 ${ground - 32} Q258 ${ground - 40} 264 ${ground - 32}`}
            fill="none"
            {...stroke}
          />
          <path
            d={`M252 ${ground - 44} Q258 ${ground - 52} 264 ${ground - 44}`}
            fill="none"
            {...stroke}
          />
        </g>

        <House x={282} windows={2} ground={ground} />
        <Tree x={326} ground={ground} />

        {/* Central church */}
        <g>
          <path
            d={`M348 ${ground} L348 ${ground - 36} L432 ${ground - 36} L432 ${ground}`}
            fill="none"
            {...stroke}
          />
          <path
            d={`M378 ${ground - 36} L390 ${ground - 58} L402 ${ground - 36}`}
            fill="none"
            {...stroke}
          />
          <path
            d={`M358 ${ground - 36} L364 ${ground - 50} L370 ${ground - 36}`}
            fill="none"
            {...stroke}
          />
          <path
            d={`M410 ${ground - 36} L416 ${ground - 50} L422 ${ground - 36}`}
            fill="none"
            {...stroke}
          />
          <path
            d={`M384 ${ground - 22} Q390 ${ground - 30} 396 ${ground - 22}`}
            fill="none"
            {...stroke}
          />
          <Window x={362} y={ground - 32} />
          <Window x={408} y={ground - 32} />
          <path
            d={`M376 ${ground - 12} Q390 ${ground - 22} 404 ${ground - 12}`}
            fill="none"
            {...stroke}
          />
        </g>

        {/* Row of small houses */}
        <House x={448} w={28} h={22} windows={2} ground={ground} />
        <House x={484} w={26} h={20} windows={2} ground={ground} />
        <House x={518} w={28} h={22} windows={2} ground={ground} />
        <Tree x={556} ground={ground} />
        <Apartment x={574} ground={ground} />

        <Tree x={618} ground={ground} />

        {/* Dome tower */}
        <g>
          <path
            d={`M638 ${ground} L638 ${ground - 56} L654 ${ground - 56} L654 ${ground}`}
            fill="none"
            {...stroke}
          />
          <path
            d={`M636 ${ground - 56} Q645 ${ground - 68} 656 ${ground - 56}`}
            fill="none"
            {...stroke}
          />
          <Window x={643} y={ground - 20} size={4} />
          <Window x={643} y={ground - 32} size={4} />
          <Window x={643} y={ground - 44} size={4} />
        </g>

        <Tree x={672} ground={ground} />
        <House x={692} w={32} windows={2} ground={ground} />
        <Tree x={736} ground={ground} />

        {/* Right cluster */}
        <Apartment x={756} ground={ground} />
        <Apartment x={790} ground={ground} />
        <Tree x={832} ground={ground} />
        <House x={852} w={36} windows={4} ground={ground} />
        <Tree x={900} ground={ground} />
        <Apartment x={920} ground={ground} />
        <Apartment x={954} ground={ground} />
        <Tree x={996} ground={ground} />
        <House x={1016} w={34} windows={4} ground={ground} />
        <Tree x={1062} ground={ground} />

        <House x={1082} windows={2} ground={ground} />
        <Tree x={1126} ground={ground} />
        <Apartment x={1146} ground={ground} />
        <Apartment x={1180} ground={ground} />
        <Tree x={1222} ground={ground} />
        <House x={1242} w={36} windows={4} ground={ground} />
        <Tree x={1290} ground={ground} />
        <House x={1310} windows={2} ground={ground} />
        <Tree x={1354} ground={ground} />
        <House x={1374} w={32} windows={4} ground={ground} />
      </svg>
    </div>
  );
}
