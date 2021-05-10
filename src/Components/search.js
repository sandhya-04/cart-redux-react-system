import React,{useState} from 'react';
import "./App.css";
const SearchBarAction=()=>{
    const[cart,SetCart]=useState([
        {
            id:1,
            title:"Bridal dress",
            price:"20,000/-"
        },
        {
            id:2,
            title:"Bridal dress_1",
            price:" 35,000/-"  
        },
        {
            id:2,
            title:"Bridal dress_2",
            price:"29,000/-"  

        },
        {
            id:3,
            title:"Bridal dress_3",
            price:"53,990/-"  

        },
        {
            id:4,
            title:"Satin Christian Wedding Gown",
            price:"43,990/-"  
            
        }
    ]);

    const[search,Setsearch]= useState("");

    const filteredProducts = cart.filter((product) => {
        if (
          product.tags.toLowerCase().includes(search) ||
          product.title.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search)
        ) {
          return product;
        }
      });
      return (
        <div className="searchBarSection">
          <div class="searchBar">
            <input
              className="input"
              onChange={(e) => {
                SetCart(e.target.value.toLowerCase());
              }}
            />
            <button className="button">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="display">
            {filteredProducts.map((product) => (
              <div className="product">
                <h6>{product.category}</h6>
                <h3>{product.title}</h3>
                <h5>{product.price}</h5>
              </div>
            ))}
          </div>
        </div>
      );
} ;
export default SearchBarAction