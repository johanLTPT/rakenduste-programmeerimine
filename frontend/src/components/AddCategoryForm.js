import {useRef} from 'react';
function AddCategoryForm(props){
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();
    function formSubmitHandler(event){
        event.preventDefault();
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;
        const item = {
            name: nameValue,
            price:  priceValue,
            category: categoryValue
        }
        //console.log(item);
        props.onAddItem(item);
    }
    return(
    <div>
    <form className="catform" onSubmit={formSubmitHandler}>
    <button className="catbutton">Sisesta uus ese</button>
        <label>Kategooria nimi</label><br/>
        <input type="text" placeholder="Nimi" required ref={nameInputRef}/><br/>
        <label>Eseme hind</label><br/>
        <input type="number" placeholder="Hind" required ref={priceInputRef}/><br/>
        <label>Eseme Kategooria</label><br/>
        <select required ref={categoryInputRef}>
            <option value="BASIC">BASIC</option>
            <option value="PREMIUM">PREMIUM</option>
            <option value="DELUXE">DELUXE</option>
        </select><br/>
        
    </form>
    </div>
    )
}
export default AddCategoryForm;