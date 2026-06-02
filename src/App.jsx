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
  {
    brand: "Reebok",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "Classic",
    beforeprice: 700,
    afterprice: 550,
  },
  {
    brand: "New Balance",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "574",
    beforeprice: 820,
    afterprice: 690,
  },
  {
    brand: "Vans",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "Old Skool",
    beforeprice: 500,
    afterprice: 399,
  },
  {
    brand: "Converse",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "Chuck Taylor",
    beforeprice: 450,
    afterprice: 349,
  },
  {
    brand: "Jordan",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "Air Jordan",
    beforeprice: 1200,
    afterprice: 999,
  },
  {
    brand: "Asics",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "Gel Kayano",
    beforeprice: 920,
    afterprice: 799,
  },
  {
    brand: "Fila",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "Disruptor",
    beforeprice: 620,
    afterprice: 499,
  },
  {
    brand: "Under Armour",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "HOVR",
    beforeprice: 980,
    afterprice: 799,
  },
  {
    brand: "Crocs",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "Classic Clog",
    beforeprice: 300,
    afterprice: 249,
  },
  {
    brand: "Timberland",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "Premium Boot",
    beforeprice: 1400,
    afterprice: 1199,
  },
  {
    brand: "Skechers",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "Go Walk",
    beforeprice: 550,
    afterprice: 449,
  },
  {
    brand: "Dr. Martens",
    image: "https://i.postimg.cc/DfRL0nTy/image.png",
    brandname: "1460 Smooth",
    beforeprice: 1300,
    afterprice: 1099,
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
