import AddItemForm from '../components/AddItemForm';
function AddItem(){
    function itemSubmitHandler(item){
        //console.log(item);
        fetch('http://localhost:8080/items', {
            method: 'POST',
            body:JSON.stringify(item),
            headers:{'Accept': 'application/json','Content-Type':'Application/json'
        }
        });
    }
    return (
        <div>
            <button>Lisa uus ese</button>
            <h1>Lisa uus eaase</h1>
            <AddItemForm onAddItem={itemSubmitHandler}/>
        </div>
    )
}
export default AddItem;