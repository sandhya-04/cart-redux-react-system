import Home from '../Components/Home'
import {connect} from 'react-redux'
import {addToCart, RemoveToCart} from '../Services/Actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)),
    RemoveToCartHandler:()=>dispatch(RemoveToCart())

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)