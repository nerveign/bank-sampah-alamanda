// Logo sementara (sama dengan app/icon.svg) sampai logo asli tersedia.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden
      className={className}
    >
      <rect width="32" height="32" rx="8" fill="#1f7a41" />
      <path
        d="M24 8c-9 0-15 4.5-15 11.5 0 1.6.4 3 1.1 4.2C12 18.5 15.5 15.5 20 14c-4 2.4-6.8 5.6-8.1 9.6 1 .6 2.3.9 3.6.9C21 24.5 24 18 24 8z"
        fill="#fff"
      />
    </svg>
  );
}
