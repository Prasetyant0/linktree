import React from 'react';
import PropTypes from 'prop-types';

function Linktree(props) {
  const { links } = props;

  return (
    <div className="linktree">
      {links.map(link => (
        <a href={link.url} key={link.name} rel="noopener noreferrer">
          <div className="link">
            <i className={`fab fa-${link.name.toLowerCase()}`}></i>
            <span>{link.name}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

Linktree.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Linktree;
