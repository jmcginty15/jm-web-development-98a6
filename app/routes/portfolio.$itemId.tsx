import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import PortfolioItem from "../components/portfolioItem";
import { portfolioItems, PortfolioItemType } from "../config";

export const loader: LoaderFunction = async ({ params }) => {
  for (const item of portfolioItems) if (item.id === params.itemId) return item;
};

export default function PortfolioItemDetail() {
  const item = useLoaderData<PortfolioItemType>();

  return (
    <div className="PortfolioItemDetail">
      <div>
        <PortfolioItem item={item} />
        <Link id="PortfolioItemDetail-back-button" to="/portfolio">
          Back to portfolio
        </Link>
      </div>
      <img
        className="PortfolioItemDetail-photo"
        src={item.detailPhoto}
        alt={item.id}
      />
    </div>
  );
}
