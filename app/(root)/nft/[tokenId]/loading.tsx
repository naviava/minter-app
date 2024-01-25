"use client";

import { DNA } from "react-loader-spinner";
import { PageWrapper } from "~/components/page-wrapper";

export default function ArticleLoading() {
  return (
    <PageWrapper>
      <div className="mt-24 flex items-center justify-center">
        <DNA />
      </div>
    </PageWrapper>
  );
}
