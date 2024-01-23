import { PageWrapper } from "~/components/page-wrapper";
import { PageHeading } from "~/components/page-heading";
import { CreateButton } from "./_components/create-button";

export default function MySpacePage() {
  return (
    <PageWrapper>
      <div className="flex items-start justify-between">
        <PageHeading label="My Space" tagline="Facts minted by you" />
        <CreateButton />
      </div>
    </PageWrapper>
  );
}
