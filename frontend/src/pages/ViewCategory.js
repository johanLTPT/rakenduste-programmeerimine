import CategoryList from '../components/CategoryList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
function ViewCategory(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedCategories,setLoadedCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/categories').then(res => {
            return res.json();
        }).then( data=> {
            //console.log(data);
            setIsLoading(false);
            setLoadedCategories(data);
        });
    },[])
    if(isLoading){
        return(<div>Is currently loading</div>);
    }
    return(
        <div>
            <Link to="add-category">
                <button>Lisa uus kategooria</button>
            </Link>
            <div>
                <h2>Kategooriad</h2>
                <CategoryList categories={loadedCategories}/>
            </div>
        </div>
    )
}
export default ViewCategory;