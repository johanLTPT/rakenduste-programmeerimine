import Category from '../components/Category';
import './CategoryList.css';
function CategoryList(props){
    return(
        <div className="CategoryElement">
            { props.categories.map(category=> (
                <Category key={category.id} name={category.name} price={category.price} category={category.category} />
            ))}
        </div>
    )
}
export default CategoryList;