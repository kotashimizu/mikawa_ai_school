import type { SVGProps } from 'react';

export function SupportIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21c4.97 0 9-3.806 9-8.5S16.97 4 12 4 3 7.806 3 12.5c0 2.121.91 4.053 2.422 5.5L4.5 21l3.484-1.503C9.07 20.185 10.48 21 12 21Z" />
      <path d="M9 11h6" />
      <path d="M9 14h3" />
    </svg>
  );
}
