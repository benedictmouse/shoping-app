import React from 'react';
import '../styles/Recommendation.css'

const Recommendation = ({ filterByCompany }) => {
  return (
    <div className='recommendation-container'>
      <div className='recommendation-title'>Recommendation</div>
      <div className='recommendation-button'>
        <button className='all-products' onClick={() => filterByCompany('All')}>All products</button>
        <button className='van ' onClick={() => filterByCompany('Vans')}>Vans</button>
        <button className='adidas' onClick={() => filterByCompany('Adidas')}>Adidas</button>
        <button className='nike' onClick={() => filterByCompany('Nike')}>Nike</button>
        <button className='puma' onClick={() => filterByCompany('Puma')}>Puma</button>
        <button className='bale' onClick={() => filterByCompany('balesiaga')}>Bale</button>

      </div>
    </div>
  );
};

export default Recommendation;
