import React from "react";
import MenuLinks from "./MenuLinks/MenuLinks";

function HeaderContent() {
  return (
    <div className="flex justify-end gap-4 bg-gray-400 p-4">
      <MenuLinks linkname="Home" url="/" />
      <MenuLinks linkname="About" url="/about" />
      <MenuLinks linkname="Services" url="/services" />
      <MenuLinks linkname="Contact" url="/contact" />
    </div>
  );
}

export default HeaderContent;
