interface IProps {
  label: string;
  tagline?: string;
}

export function PageHeading({ label, tagline }: IProps) {
  return (
    <div>
      <h1 className="text-2xl font-medium md:text-3xl">{label}</h1>
      {tagline && <p className="text-xs md:text-sm">{tagline}</p>}
    </div>
  );
}
