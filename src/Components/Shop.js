import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    let fetchItems = async () => {

        let data = await fetch('https://api.myjson.com/bins/1hj9cq');
            let items = await data.json();
            //console.log(items.products);
            setItems(items.products);
    };

    

return (
    <div>
     
     <h1 className="shopHeadingStyle">Here is the Range of Accessories we provide:</h1>
      { items.map(item => (
          <h3 key = {item.id}>
              <Link className="shopItemStyle" to={'./Shop/${item.price}'}> {item.name} </Link> 
          </h3>
      ))} 
    </div>
  );
}

export default Shop;
