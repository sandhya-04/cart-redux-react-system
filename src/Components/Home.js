import React from 'react';

function Home(props){
    console.warn("props",props)
    return(
        <div>
           
            <h1>Big Bazaar!!</h1>
            <hr color="black"></hr>
            <marquee><h3><i>There is beautiful collection of bride with reasonable price.So why are you waiting and book your awesome bridal collection!!!</i></h3></marquee>
            <div className="id1">
                <div className="id2">
                    <img className="img1" src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?cs=srgb&dl=pexels-photomix-company-291759.jpg&fm=jpg" height="300px" width="300px" align="center"/>
                </div>
                
                <div className="id3">
                    <span>
                        <i><u>Bridal dress</u></i>
                    </span>
                    <br></br>
                    <span>
                    <i><u>Price: 20,000/-</u></i>
                    </span>
                </div>
                <div className="id4">
                    <button onClick={()=>{props.addToCartHandler({price:1000,name:'Bridal dresses'})}}
                    
                    >Add To Bag</button>
                    <button onClick={()=>{ props.RemoveToCartHandler()}}>Remove to cart</button>
                </div>
                
            </div>
            <div className="id5">
                    <img className="img2" src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/574/282/new_large/fih_2.jpg?1539850153" height="300px" width="300px" align="center"/>
                    
                    <div className="id3">
                    <span>
                        <i><u>Bridal dress</u></i>
                    </span>
                    <br></br>
                    <span>
                    <i><u>Price: 35,000/-</u></i>
                    </span>
                </div>
                <div className="id4">
                    <button onClick={()=>{props.addToCartHandler({price:1000,name:'Bridal dresses'})}}
                    
                    >Add To Bag</button>
                    <button onClick={()=>{ props.RemoveToCartHandler()}}>Remove to cart</button>
                </div>
                </div>
                <div className="id6">
                    <img className="img3" src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/837/158/new_large/58410685_1299592956863054_8230202976216707228_n.jpg?1556823529" height="300px" width="300px" align="center"/>
                    <div className="id3">
                    <span>
                        <i><u>Bridal dress</u></i>
                    </span>
                    <br></br>
                    <span>
                    <i><u>Price: 29,000/-</u></i>
                    </span>
                </div>
                <div className="id4">
                    <button onClick={()=>{props.addToCartHandler({price:1000,name:'Bridal dresses'})}}
                    
                    >Add To Bag</button>
                    <button onClick={()=>{ props.RemoveToCartHandler()}}>Remove to cart</button>
                </div>
                </div>
                <div className="id7">
                    <img className="img4" src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/848/235/new_large/Zuhair.jpg?1557468376" height="300px" width="300px" align="center"/>
                    <div className="id3">
                    <span>
                        <i><u>Bridal dress</u></i>
                    </span>
                    <br></br>
                    <span>
                    <i><u>Price: 53,990/-</u></i>
                    </span>
                </div>
                <div className="id4">
                    <button onClick={()=>{props.addToCartHandler({price:1000,name:'Bridal dresses'})}}
                    
                    >Add To Bag</button>
                    <button onClick={()=>{ props.RemoveToCartHandler()}}>Remove to cart</button>
                </div>
                
                
                </div>
                <div className="id8">
                    <img className="img5" src="https://4.imimg.com/data4/KF/GL/ANDROID-41690576/product-500x500.jpeg" height="300px" width="300px" align="center"/>
                    <div className="id3">
                    <span>
                        <i><u>Satin Christian Wedding Gown</u></i>
                    </span>
                    <br></br>
                    <span>
                    <i><u>Price: 43,990/-</u></i>
                    </span>
                </div>
                <div className="id4">
                    <button onClick={()=>{props.addToCartHandler({price:1000,name:'Bridal dresses'})}}
                    
                    >Add To Bag</button>
                    <button onClick={()=>{ props.RemoveToCartHandler()}}>Remove to cart</button>
                </div>
                
                
                </div>
        </div>
    )
}
export default Home