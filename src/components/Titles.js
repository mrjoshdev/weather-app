import React from 'react';

const Titles = () => {
    return (
      <div>
        <h1 className='title-container__title'>Weather Party <span role = 'img' aria-label="party-horn" description= 'party horn emoji'>🎉</span></h1>
        <p className='title-container__subtitle'>Enter US zip code...</p>
      </div>
    );
}

export default Titles;
