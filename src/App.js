import React, { useState } from "react";
import Header from "./Header.module.css";
import Hero from "./Hero.module.css";




function App() {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleMenuBtnClick = () => {
    setShowDrawer(true);
  };

  const HandleCloseDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <div>
      <header  className={Header["header"]}>
        <div className={Header["logo"]}> Logo</div>
        <div className={Header["menu"]}>
          <div>Menu Item 1</div>
<div>Menu Item 2</div>
<div>Menu Item 3</div> 
<div className={Header["menu-btn"]} onClick={handleMenuBtnClick}>
  Menu
</div>
       </div>
      </header>
      <Hero  title="Welcome to my site" text= "hbjhjhkhkjhk" />
      {showDrawer && (
        <div className={Header["drawer"]} onClick={HandleCloseDrawer}>
          <div className={Header["drawer-menu"]}>
            <div className={Header["menu-item"]}>Menu Item 1</div>
            <div className={Header["menu-item"]}>Menu Item 2</div>
          </div>
          </div>
      )}
   
 </div>
  );
}

export default App;
