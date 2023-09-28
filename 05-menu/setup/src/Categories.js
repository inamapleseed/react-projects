import React from 'react';

const Categories = ({filterItems, categories}) => {
  return (
    <div className='btn-container'>
      {categories.map((cats, index) => {
        return <button type="button" key={index} className="filter-btn" onClick={()=> filterItems(cats)}>{cats}</button>;
      })}
    </div>
  );
};

export default Categories;
