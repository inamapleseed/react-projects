import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((peeps) => {
        const {id, name, age, image} = peeps;
        return (
          <article className="person" key={id}>
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
