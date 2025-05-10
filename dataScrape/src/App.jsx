import { useEffect, useState } from 'react'
import './App.css'
import Header from './assets/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Slider from './assets/banner/Slider'
import Product from './assets/Product/Product'

function App() {
  const [slider, setSlider] = useState([]);
  const [menu, setMenu] = useState([]);
  const [product, setProduct] = useState([]);
  const getMenu = async () => {
    let response = await fetch(`http://localhost:3000/home`);
    let data = await response.json()
    // console.log(data);
    setMenu(data);
  }
  const getSlider = async () => {
    try {
      let response = await fetch(`http://localhost:3000/slider`)
      let data = await response.json();
      setSlider(data);

    } catch (err) {
      console.log(err);

    }
  }  //json-server --watch db.json

  const getProduct = async () => {
    try {
      let response = await fetch(`http://localhost:3000/product`)
      let data = await response.json();
      setProduct(data);
      console.log(err);


    } catch (err) {
      console.log(err);

    }
  }

  useEffect(() => {
    getMenu();
    getSlider();
    getProduct();
  }, [])

  return (
    <>
      <Header menuList={menu} />
      <Slider sliderList={slider} />
      <Product ProductList={product}/>
    </>
  )
}

export default App
