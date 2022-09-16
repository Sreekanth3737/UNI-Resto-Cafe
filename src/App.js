import { Container } from "postcss";
import { useState } from "react";
import CategoryDishes from "./Components/CategoryDishes/CategoryDishes";
import MenuList from "./Components/MenuList/MenuList";
import Navbar from "./Components/Navigation/Navbar";
import Cart from "./context/CartCotext";




function App() {





  return (
    < >
    <Cart>

      <Navbar    />
      
      <MenuList />
      <CategoryDishes />
      
    </Cart>
    </>
  );
}

export default App;
