import { PageWrapper } from "~/components/page-wrapper";
import { PageHeading } from "~/components/page-heading";

export default function ExplorePage() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-between">
        <PageHeading label="Explore" tagline="See what others are doing" />
      </div>
    </PageWrapper>
  );
}
