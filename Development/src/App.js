
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Dropdown} from 'react-bootstrap';
import shoeData from "./Assets/shoe-data.json"
import shoeItem from './Components/shoeItem.js';
import { useDebugValue, useState } from 'react';


function App() {
  const intialList = []
  const [shoeType, setShoeType] = useState("All");
  const [color, setColor] = useState("All");
  const [sortType, setSortType] = useState("None");
  const [viewFav, setViewFav] = useState("All");
  const [favorites, setFavorites] = useState(intialList);
  const [totalPrice, setTotalPrice] = useState(0);

  const selectShoeFilterType = eventKey => {
    setShoeType(eventKey);
  }

  const matchesShoeFilterType = item => {
    if (shoeType === "All"){
      return true
    }
    else if (shoeType === item.Types){
      return false
    }
    else{
      return true
    }
  }

  const selectColorFilterType = eventKey => {
    setColor(eventKey);
  }

  const matchesColorFilterType = item => {
    if (color === "All"){
      return true
    }
    else if (color === item.color){
      return false
    }
    else{
      return true
    }
  }

  const selectViewFav = eventKey => {
    setViewFav(eventKey);
  }

  const matchesFavFilter = item => {
    if (viewFav === "All"){
      return true
    }
    else{
      return favorites.includes(item)
    }
  }

  const filteredData = shoeData.filter(matchesShoeFilterType).filter(matchesColorFilterType).filter(matchesFavFilter);

  const selectSortType = eventKey => {
    setSortType(eventKey);
  }

  var sortedItems

  function sorting(items){ 
    if (sortType != "None"){
      if (sortType === "price"){
        sortedItems = items.sort((a, b) => {
          return a.price - b.price
        })
      }
      else if (sortType === "alphabetically"){
        sortedItems = items.sort((a, b) => {
          if (a.name < b.name){
            return -1;
          }
          else if (a.name > b.name){
            return 1;
          }
          return 0;
        })
      }
      console.log(sortedItems)
      return sortedItems
    }
    return items
  }

  const sortedShoes = sorting(filteredData);

  function addToFav(item){
    const tempList = favorites.concat([item]);
    setFavorites(tempList);
    setTotalPrice(totalPrice + item.price)
    console.log(item);
    console.log(favorites);
  }

  function removeFromFav(item){
    const tempList = favorites.filter(a => a !== item)
    setFavorites(tempList);
    setTotalPrice(totalPrice - item.price)
  }

  function favButton(item){
    if (favorites.includes(item)){
      return (<button id="addFav" onClick={() => removeFromFav(item)}>Remove From Cart</button>)
    }
    else{
      return (<button id="addFav" onClick={() => addToFav(item)}>Add To Cart</button>)
    }
  }

  function resetFilters(){
    setShoeType("All");
    setColor("All");
    setSortType("None");
    setViewFav("All");
  }

  return (
    <div className="App">
      <h1>Strada Shoes</h1>
      <div className='page'>
      <div className='menu'>
         Filters
         
         <Dropdown onSelect={selectSortType} className='selector'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Sort By
          </Dropdown.Toggle>
          <Dropdown.Menu >
            <Dropdown.Item eventKey="price">Price</Dropdown.Item>
            <Dropdown.Item eventKey="alphabetically">Alphabetically</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown onSelect={selectShoeFilterType} className='selector'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Shoe Type
          </Dropdown.Toggle>
          <Dropdown.Menu >
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="boot">Boot</Dropdown.Item>
            <Dropdown.Item eventKey="waterproof">Waterproof</Dropdown.Item>
            <Dropdown.Item eventKey="sneaker">Sneaker</Dropdown.Item>
            <Dropdown.Item eventKey="clog">Clog</Dropdown.Item>
            <Dropdown.Item eventKey="dress shoe">Dress Shoe</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown onSelect={selectColorFilterType} className='selector'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Color
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item eventKey="All">None</Dropdown.Item>
            <Dropdown.Item eventKey="Black">Black</Dropdown.Item>
            <Dropdown.Item eventKey="Red">Red</Dropdown.Item>
            <Dropdown.Item eventKey="Brown">Brown</Dropdown.Item>
            <Dropdown.Item eventKey="Multi">Multi</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown onSelect={selectViewFav} className='selector'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            View Cart
          </Dropdown.Toggle>
          <Dropdown.Menu>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="favs">Cart</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br></br>
      
      Total Price: ${Math.abs(totalPrice.toFixed(2))}

      <br></br>
      <button onClick={resetFilters}>Reset Sort and Filters</button>
      </div>
      
      
      
      <div className="display">
      
        {sortedShoes.map((item) => (
          <div className="shoes">
            <shoeItem name={item.name} price={item.price} color={item.color} image={item.image} Types={item.Types}/>
            {favButton(item)}
          </div>

        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
