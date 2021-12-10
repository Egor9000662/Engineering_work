import React from "react";
import styles from "./styles/app.module.scss";
import MainHeader from "./components/header/MainHeader";
import NavHeader from "././components/header/NavHeader";
import BenefitsInfo from "./components/main/BenefitsInfo";
import Slider from './components/main/Slider'
import Info from "./components/main/Info";
function App() {
  return (
    
    <div className={styles.container}>
      <header>
        <NavHeader />
        <MainHeader />
      </header>
      <main>
        <BenefitsInfo />
        <Slider/>
        <Info/>
      </main>
    </div>
  );
}

export default App;
