interface IProps {
  title: string;
  description: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export function AssetForm({
  title,
  description,
  setTitle,
  setDescription,
}: IProps) {
  return <div>AssetForm</div>;
}
