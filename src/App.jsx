import React from 'react'
import Card from './components/Card'
import Header from './components/header/Header';
const App = () => {
  const products = [
  {
    brand: "Nike",
    image: "https://i.postimg.cc/4dBHXR1Z/image.png",
    brandname: "Air Zoom Pegasus",
    beforeprice: 990,
    afterprice: 749,
  },
  {
    brand: "Adidas",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "Ultraboost",
    beforeprice: 850,
    afterprice: 699,
  },
  {
    brand: "Puma",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "RS-X",
    beforeprice: 780,
    afterprice: 620,
  },
];
  return (
    <div>
      <Header />
      <div className="parents">
      {products.map(function(elem, idx){
          return <div className="div"key={idx}>
            <Card 
          brand={elem.brand} 
          image={elem.image} 
          name={elem.brandname}
          beforeprice={elem.beforeprice}
          afterprice={elem.afterprice}
          />
          </div>

        })}
        </div>
    </div>
  )
}

export default App
