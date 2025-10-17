import React from "react";
import { Link } from "react-router-dom";

function MenuLinks(props) {
  return (
    <>
      {/* <link rel="stylesheet" href={props.url}>
        {props.linkname}
      </link> */}

      {/* <a href={props.url}>{props.linkname}</a> */}
      <div className="hover:scale-110">
        <Link to={props.url}>{props.linkname}</Link>
      </div>
    </>
  );
}

export default MenuLinks;
