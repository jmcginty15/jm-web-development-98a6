import { portfolioItems } from "../config";
import PortfolioItem from "../components/portfolioItem";

export default function PortfolioIndexPage() {
  return (
    <div className="Portfolio-index">
      {portfolioItems.map((item) => (
        <PortfolioItem key={item.id} item={item} clickable />
      ))}
    </div>
  );
}
