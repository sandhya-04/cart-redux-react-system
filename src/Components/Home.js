import React from 'react';

function Home(props){
    console.warn("props",props)
    return(
        <div>
           
            <h1>Big Bazaar!!</h1>
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

        </div>
    )
}
export default Home