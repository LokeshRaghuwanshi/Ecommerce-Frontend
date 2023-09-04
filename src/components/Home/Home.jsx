import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect ,useContext} from "react";
import { fetchDataFromApi  } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const {categories,setCategories,products,setProducts}=useContext(Context);

  
  useEffect(()=>{
    getProducts();
    getCategories();
  },[])

  const getProducts=()=>{
    fetchDataFromApi("/api/products?populate=*").then((res)=>{
    setProducts(res);
  });
  };

  const getCategories=()=>{
    fetchDataFromApi("/api/categories?populate=*").then((res)=>{
    setCategories(res);
  });
  };
  
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories}/>
          <Products  products={products} headingText="Popular Products"/>
        </div>
      </div>
    </div>
    //f943564c2b9950512c8b84a16ef1e8e8a61a842f214509426a7f592bda2f99906eefaa3a318612f663a1d47b3035e7a7480d10363f58b26c2c5d32242d24848d7ba4d920f9fab1e3ca0cd2b7c707c77faebb7e4bf210783f217752bde03a5bf1e3132fb37320f7f576916c7f5e4f240b0acd04148e5a29029ba2458a28dda80e
  );
};

export default Home;
