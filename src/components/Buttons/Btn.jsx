import React from 'react';
import '../Buttons/btn.css'; // Your button styles
import { Link } from 'react-router-dom';

// We add a new prop: `downloadLink`
function Btn({ btntext, icon, links, downloadLink }) {

  // If downloadLink is provided, render a standard <a> tag for downloading
  if (downloadLink) {
    return (
      <a 
        href={downloadLink} 
        download // This attribute triggers the download
        className="btn-style" // Apply your button styles to the <a> tag
      >
        {btntext} <span className='icon-element'>{icon}</span>
      </a>
    );
  }

  // Otherwise, render the react-router-dom <Link> for navigation
  return (
    <Link 
      to={links} 
      className="btn-style" // Apply your button styles to the <Link> tag
    >
      {btntext} <span className='icon-element'>{icon}</span>
    </Link>
  );
}

export default Btn;