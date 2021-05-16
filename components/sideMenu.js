import React from "react";
import Link from 'next/link'

function SideMenu({ categories }) {
  console.log("categories", categories);
  return (
    <div className="col-lg-3">
      <h1 className="my-4">Cinemas</h1>
      <div className="list-group">
        {categories.map((item, idx) => (
          <Link key={idx} href="#">
            <a className="list-group-item">
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideMenu;
