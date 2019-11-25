import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function ItemDetail() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [item, setItem] = useState([]);

    let fetchItems = async () => {

        let data = await fetch('https://api.myjson.com/bins/1hj9cq');
            let item = await data.json();
            //console.log(items.products);
            setItem(item.products);
    };

    

return (
    <div>
     
     <h1 className="itemDetailsHeader">Item Details</h1>
      { item.map(item => (
          <h3 key = {item.id}>
              <div className="shopItemStyle" to={'./Shop/${item.price}'}>{item.name}<br /><br />
               {item.description}<br /><br />
               <p>Price {item.price} </p>
               
              </div> 
          </h3>
      ))} 
    </div>
  );
}

export default ItemDetail;
