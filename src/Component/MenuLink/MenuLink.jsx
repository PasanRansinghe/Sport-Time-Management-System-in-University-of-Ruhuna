import React from 'react';
import { Link } from 'react-router-dom';
import './MenuLink.css';

function MenuLink({ linkname, url }) {
  return (
    <Link to={url} className="menu-link">
      {linkname}
    </Link>
  );
}

export default MenuLink;
  