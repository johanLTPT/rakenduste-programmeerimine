import AddCategoryForm from '../components/AddCategoryForm';
import './AddCategory.css';
function AddCategory(props){
    function categorySubmitHandler(category){
        //console.log(item);
        fetch('http://localhost:8080/categories', {
            method: 'POST',
            body:JSON.stringify(category),
            headers:{'Accept': 'application/json','Content-Type':'Application/json'
        }
        });
    }
    return(
        <div>
            <h1>Lisa uus kateegroia</h1>
            <div className="CategoryInput">
                <AddCategoryForm onAddItem={categorySubmitHandler}/>
                </div>
        </div>
    )
}
export default AddCategory;