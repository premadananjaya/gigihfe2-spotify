import React, { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button'

export default function Tracks ({ imageUrl, title, artist, select, toggleSelect }) {
  const [isSelected, setIsSelected] = useState(select);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  }

  return (
    <div className="card">
      <div className="card__image">
        <img src={imageUrl} alt={title} />
      </div>

      <div className="card__data">
        <h3 className="card__title truncate">{title}</h3>
        <p className="card__artist truncate">{artist}</p>
        
      <div className="card__action">
          <Button
            variant="contained" size="medium" color='success' style={{ borderRadius: 25 }}
            onClick={handleToggleSelect}
          >
            {isSelected ? 'Deselect' : 'Select'}
          </Button>
        </div>
      </div>
    </div>
  );
}

Tracks.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  toggleSelect: PropTypes.func.isRequired,
  select: PropTypes.bool.isRequired,
};
