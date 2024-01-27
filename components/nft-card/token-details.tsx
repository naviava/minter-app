import Link from "next/link";
import Image from "next/image";

interface IProps {
  id: string;
  title: string;
  media: string;
  walletId?: string;
  isOwner?: boolean;
}

export function TokenDetails({ id, title, media, walletId, isOwner }: IProps) {
  return (
    <>
      <Link href={`/nft/${id}`}>
        <div className="relative mb-4 aspect-square w-full">
          <Image
            fill
            src={media}
            alt={title}
            className="rounded-sm object-cover"
          />
        </div>
      </Link>
      <div className="space-y-2">
        {isOwner && (
          <div className="text-center text-sm text-muted-foreground">
            <p className="font-light">Wallet</p>
            <p className="font-semibold">{walletId}</p>
          </div>
        )}
        <Link href={`/nft/${id}`}>
          <h3 className="mt-2 line-clamp-1 text-balance break-words text-center font-medium transition hover:underline">
            {title}
          </h3>
        </Link>
      </div>
    </>
  );
}
