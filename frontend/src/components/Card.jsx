import React from 'react';
import { Link } from "react-router-dom";
const Card = ({ fliteredItems }) => {
  return (
    <div>
    <div className="grid xl:grid-cols-4 md:mx-16  md:grid-cols-2 grid-cols-2">
    {
        fliteredItems.slice(0,8).map((item) => (
            <div className="px-8 py-4" key={item.id}>
              <Link to={`/shop/${item.id}`}>
              <img src={item.image} alt="" className='rounded-md'/>
              </Link>
                <div className="flex justify-between items-end">
                    <div className="">
                        <h1 className='h1'>{item.title}</h1>
                        <p className='p'>{item.category}</p>
                    </div>
                    {/* Link Rounter */}
                    <h1 className='h1' >{item.price}</h1>
            </div>
        </div>
        ))
      }
    </div>
    </div>
  );
};

export default Card;
