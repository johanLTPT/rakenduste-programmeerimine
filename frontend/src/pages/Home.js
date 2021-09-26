import ItemList from '../components/ItemList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems,setLoadedItems] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then( data=> {
            //console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        });
    },[])
    if(isLoading){
        return(<div>Is currently loading</div>);
    }

    return (
        <div>
            <Link to="add-item">
                <button>Lisa uus ese</button>
            </Link>
            <div>
                <h2>Esemed</h2>
                <ItemList items={loadedItems}/></div>
            <div>
                <img src="graphic.png" alt="" className="graphic" style={{height:150 + 'px'}}/>
            </div>
        </div>
    )
}
export default Home;