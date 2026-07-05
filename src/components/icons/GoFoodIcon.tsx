interface Props {
  className?: string;
}

export default function GoFoodIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#00AA13" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.636 0 8.4 3.764 8.4 8.4 0 4.636-3.764 8.4-8.4 8.4-4.636 0-8.4-3.764-8.4-8.4 0-4.636 3.764-8.4 8.4-8.4zm0 3.6a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 1.8a3 3 0 110 6 3 3 0 010-6z" />
    </svg>
  );
}
