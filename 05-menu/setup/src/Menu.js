import React from 'react';

const Menu = ({menuItems}) => {
  return (
    <div className='section-center'>
      {menuItems.map((item)=> {
        const {img, id, title, desc, price} = item;
        return (
          <article key={id} className="menu-item">
            <img className="photo" src={img} alt={item.title} />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        )
      })}
    </div>
  );
};

export default Menu;
