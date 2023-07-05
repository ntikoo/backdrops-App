import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        console.log(link);
        return (
          <PageLink
            key={link.id}
            {...link}
            itemClass={itemClass}
            rel="noreferrer"
          />
        );
      })}
    </ul>
  );
};

export default PageLinks;
