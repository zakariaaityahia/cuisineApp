import Category from "./components/Category";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cuisine from "./pages/Cuisine";
import Recipe from "./pages/Recipe";
import Search from "./components/Search";
import Searched from "./pages/Searched";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App"> 
      
      <BrowserRouter>
        <Nav>
        <GiKnifeFork/>
          <Logo to={'/'}>Delicious Food</Logo>
        </Nav>
        <Search/>
        <Category />  
            <Routes>
              <Route exact path="/" element={<Home />} /> 
              <Route exact path="/cuisine/:type" element={<Cuisine/>} />
              <Route exact path="/searched/:search" element={<Searched/>} />
              <Route exact path="/recipe/:name" element={<Recipe/>} />
            </Routes>
    </BrowserRouter>
     
    </div>
  );
}


const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster', cursive;
`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`
export default App;
