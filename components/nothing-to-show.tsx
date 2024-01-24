import Image from "next/image";

interface IProps {
  message: string;
}

export function NothingToShow({ message }: IProps) {
  return (
    <div className="mt-24 space-y-10">
      <div className="relative mx-auto aspect-square w-[250px]">
        <Image
          fill
          src="/nothing-to-show.svg"
          alt="No NFTs linked to this account."
        />
      </div>
      <h2 className="text-balance text-center text-lg font-light italic text-muted-foreground">
        {message}
      </h2>
    </div>
  );
}
