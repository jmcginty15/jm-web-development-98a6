import type { LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { portfolioItems } from "../config";
import PortfolioItem from "../components/portfolioItem";

export const loader = async ({ params }: LoaderArgs) => {
  for (let item of portfolioItems) if (item.id === params.itemId) return item;
};

export default function PortfolioItemDetail() {
  const item = useLoaderData();

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
