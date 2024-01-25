interface IProps {
  label: string;
  tagline?: string;
}

export function PageHeading({ label, tagline }: IProps) {
  return (
    <div className="max-w-[75%] md:max-w-[85%]">
      <h1 className="text-balance break-words text-2xl font-medium md:text-3xl">
        {label}
      </h1>
      {tagline && <p className="text-xs md:text-sm">{tagline}</p>}
    </div>
  );
}
