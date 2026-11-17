const sizes = {
  md: "h-12 w-12 rounded-xl text-xl",
  lg: "h-16 w-16 rounded-2xl text-3xl",
};

// Coloured letter tile used as the brand "logo".
export default function BrandTile({ brand, size = "md" }) {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center font-bold text-white ${sizes[size]}`}
      style={{ backgroundColor: brand.color }}
    >
      {brand.letter}
    </span>
  );
}
