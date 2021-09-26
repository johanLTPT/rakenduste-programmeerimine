import './Navbar.css';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <div className="navbar">
            <Link to="/">
                <img src="logo.png" alt="" className="logo"/>
            </Link>
            <Link to="cart">
                <img src="cart.svg" alt="" className="cart"/>   
            </Link>
            <Link to="view-category">
                <div className="viewcategory">Vaata kategooria</div>  
            </Link> 
        </div>
    );
}
export default Navbar;