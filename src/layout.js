import {  Route, Routes} from "react-router-dom";
import PlansAvailable from "./container.js/plansAvailable";
import Home from './container.js/home'
import Add from "./container.js/addbook";
import SideMenu from "./components/sMenu";
import Header from "./components/header";

const AppLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <SideMenu />
        <main style={{ flex: 1, overflowX: 'auto'}}>
          <Routes>
          <Route default path="/" exact element={<Home/>} />
          <Route path="/plansAvailable" element={<PlansAvailable/>} />
          <Route path="/addBook" element={<Add/>} />
        </Routes>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
