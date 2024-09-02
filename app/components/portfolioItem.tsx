/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useNavigate } from "@remix-run/react";

import type { PortfolioItemType } from "~/config";

export default function PortfolioItem({
  item,
  clickable,
}: {
  item: PortfolioItemType;
  clickable?: boolean;
}) {
  const navigate = useNavigate();

  const { title, description, photo, adPhoto, id } = item;

  const handleClick = (
    evt:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>,
    id: string,
  ) => {
    if (clickable && !(evt.target instanceof HTMLAnchorElement))
      navigate(id === "your-site-here" ? "/process" : `/portfolio/${id}`);
  };

  return (
    <div
      className={`PortfolioItem${clickable ? " PortfolioItem-clickable" : ""}`}
      onClick={(evt) => handleClick(evt, id)}
      onKeyDown={(evt) => handleClick(evt, id)}
    >
      <div
        className="PortfolioItem-photo"
        style={{
          backgroundImage: `url(${clickable ? (adPhoto ? adPhoto : photo) : photo})`,
        }}
      />
      <div className="PortfolioItem-content">
        <h2 className="PortfolioItem-title">
          {item.url ? (
            <a href={item.url} target="_blank" rel="noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
        <p
          className="PortfolioItem-text"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
