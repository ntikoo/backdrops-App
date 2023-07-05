import React from "react";
import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <SocialLink
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

export default SocialLinks;
