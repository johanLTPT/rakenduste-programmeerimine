import Item from '../components/item';
function Home() {
    return (
        <div>
            Koduleht
            <Item name="Item1" price="10" category="laptop" />
            <Item name="Item2" price="10" category="laptop" />
        </div>
    )
}
export default Home;