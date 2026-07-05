interface Props {
  className?: string;
}

export default function TikTokShopIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" fill="none" stroke="#25F4EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" fill="none" stroke="#FE2C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" transform="translate(0.6 0.6)" />
      <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" transform="translate(0.3 0.3)" />
    </svg>
  );
}
