export default function AnimatedCar() {
  return (
    <div className="flex min-h-[280px] items-center justify-center px-2">
      <svg
        viewBox="0 0 520 260"
        className="h-auto w-full max-w-[540px]"
        role="img"
        aria-label="Animated car"
      >
        <ellipse
          className="car-shadow"
          cx="260"
          cy="214"
          rx="168"
          ry="10"
          fill="#141718"
          fillOpacity="0.1"
        />

        <g className="car-body">
          <path
            d="M86 176c0-20 16-32 40-34h52l26-48c9-16 24-26 44-26h96c20 0 36 10 44 26l26 48h56c24 2 40 14 40 34v10c0 12-8 18-20 18h-30a38 38 0 0 0-76 0H204a38 38 0 0 0-76 0H106c-12 0-20-6-20-18v-10z"
            fill="#141718"
          />
          <path
            d="M214 82c8-14 20-22 38-22h86c16 0 28 8 36 20l24 42H196l18-40z"
            fill="#E7EEF2"
          />
          <path
            d="M232 74c10-8 20-10 30-6l-18 32h-28l16-26z"
            fill="#FFFFFF"
            fillOpacity="0.55"
          />
          <path
            d="M300 72v68"
            stroke="#FFFFFF"
            strokeOpacity="0.28"
            strokeWidth="2"
          />
          <rect x="448" y="138" width="26" height="12" rx="6" fill="#FFC95C" />
          <rect
            x="98"
            y="142"
            width="16"
            height="9"
            rx="4.5"
            fill="#FEFEFE"
            fillOpacity="0.85"
          />

          <g transform="translate(164 196)">
            <g className="car-wheel">
              <circle r="34" fill="#141718" />
              <circle r="24" fill="#2C3134" />
              <circle r="16" fill="#E8ECEF" />
              <path
                d="M0-13V13M-13 0H13"
                stroke="#141718"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle r="5" fill="#141718" />
            </g>
          </g>
          <g transform="translate(364 196)">
            <g className="car-wheel">
              <circle r="34" fill="#141718" />
              <circle r="24" fill="#2C3134" />
              <circle r="16" fill="#E8ECEF" />
              <path
                d="M0-13V13M-13 0H13"
                stroke="#141718"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle r="5" fill="#141718" />
            </g>
          </g>
        </g>
      </svg>

      <style>{`
        .car-body {
          animation: car-bob 1.6s ease-in-out infinite;
        }
        .car-shadow {
          transform-box: fill-box;
          transform-origin: center;
          animation: car-shadow 1.6s ease-in-out infinite;
        }
        .car-wheel {
          transform-box: fill-box;
          transform-origin: center;
          animation: car-wheel-spin 0.7s linear infinite;
        }
        @keyframes car-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes car-shadow {
          0%, 100% { transform: scaleX(1); opacity: 1; }
          50% { transform: scaleX(0.92); opacity: 0.7; }
        }
        @keyframes car-wheel-spin {
          to { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .car-body, .car-wheel, .car-shadow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
