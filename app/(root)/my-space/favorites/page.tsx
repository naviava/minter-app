import { PageHeading } from "~/components/page-heading";
import { PageWrapper } from "~/components/page-wrapper";
import { CreateButton } from "~/components/create-button";

interface IProps {}

export default function FavoritesPage({}: IProps) {
  return (
    <PageWrapper>
      <div className="flex items-start justify-between">
        <PageHeading label="My Favorites" tagline="All the NFTs you enjoyed" />
        <CreateButton />
      </div>
    </PageWrapper>
  );
}
