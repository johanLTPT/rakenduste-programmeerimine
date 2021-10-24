function Category(props){
    return (
        <div className="CategoryElement">
            <div className="categoryName">{props.name}</div>
            <div className="categoryPrice">{props.price}</div>
            <div className="categoryType">{props.category}</div>
        </div>
    )
}
export default Category;