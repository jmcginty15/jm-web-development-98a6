import PortfolioItem from "../components/portfolioItem";
import { portfolioItems } from "../config";

export default function PortfolioIndexPage() {
  return (
    <div className="Portfolio-index">
      {portfolioItems.map((item) => (
        <PortfolioItem key={item.id} item={item} clickable />
      ))}
    </div>
  );
}
