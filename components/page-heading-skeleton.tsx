import { Skeleton } from "~/components/ui/skeleton";
import { PageWrapper } from "~/components/page-wrapper";

export function PageHeadingSkeleton() {
  return (
    <PageWrapper>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <Skeleton className="h-8 w-40 rounded-lg md:h-10" />
          <Skeleton className="h-4 w-60 rounded-lg md:h-6 md:w-72" />
        </div>
        <Skeleton className="h-10 w-24 rounded-full" />
      </div>
    </PageWrapper>
  );
}
