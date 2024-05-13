"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import algoliasearch from "algoliasearch/lite";
import { SearchBox } from "react-instantsearch";
import { InstantSearchNext } from "react-instantsearch-nextjs";

const searchClient = algoliasearch(
  "IEK208YLBP",
  "e8693cdec617fc6f3b00e35f0eba91f9"
);

export default function Search() {
  return (
    <InstantSearchNext
      indexName="portfolio"
      searchClient={searchClient}
      routing={{
        router: {
          cleanUrlOnDispose: false,
          windowTitle(routeState) {
            const indexState = routeState.indexName || {};
            return indexState.query
              ? `MyWebsite - Results for: ${indexState.query}`
              : "MyWebsite - Results page";
          },
        },
      }}
    >
      <SearchBox className="bg-white" />
    </InstantSearchNext>
  );
}
