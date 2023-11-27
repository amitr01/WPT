import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainNavBar from './components/MainNavBar';
import {Routes,Route} from 'react-router-dom'
import ProductTable from './components/ProductTable';
import HomeComponent from './components/HomeComponent';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import ProductEdit from './components/ProductEdit';
import ProductForm from './components/ProductForm';
import { Product } from './product';
function App() {
  return (
    <div>
             <h1 style={{"backgroundColor":"blue",color:"white","border":"2px solid red"}}>Product Management System</h1>
             <MainNavBar></MainNavBar>
             <Routes>
                    <Route path='/home' element={<HomeComponent></HomeComponent>} ></Route>
                    <Route path='/table' element={<ProductTable></ProductTable>} ></Route>
                    <Route path="/list" element={<ProductList></ProductList>}></Route>
                  <Route path="/form" element={<ProductForm></ProductForm>}></Route>
                  <Route path="/edit/:pid" element={<ProductEdit></ProductEdit>}></Route>
                 <Route path="/view/:pid" element={<ProductCard></ProductCard>}></Route>
             </Routes>
    </div>
  );
}

export default App;
