import React, { useState } from "react";
import './App.css';
import menu from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const getUniqueCategories = ['All', ...new Set(menu.map((item) => item.category))];
console.log(getUniqueCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(getUniqueCategories);

  const filterItems = (category) => {
    if (category !== 'All') {
      const newItems = menu.filter((newItems) => {
        return newItems.category === category;
      });

      setMenuItems(newItems);
    }
    else {
      setMenuItems(menu);
    }
  }

  return <React.Fragment>
    <main>
      <section>
        <div className="title-menu">
          <h1>Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  </React.Fragment>
}

export default App;