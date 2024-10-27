
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header title="Tienda de cartas Pokemon" />
            <MyCard
                imageUrl="https://repositorio.sbrauble.com/arquivos/in/pokemon_bkp/cd/406/796s_228.jpg"
                name="Charizard Shiny"
                description="Precio: 15.000$"
                tagColor="primary"
            />
            <MyCard
                imageUrl="https://http2.mlstatic.com/D_NQ_NP_916688-MLC52961167534_122022-O.webp"
                name="Pikachu Vmax"
                description="Precio: 25.000$"
                tagColor="info"
            />

                <MyCard
                imageUrl="https://http2.mlstatic.com/D_NQ_NP_670996-MLC69605213098_052023-O.webp"
                name="Mewto"
                description="Precio: 38.000$"
                tagColor="primary"
            />
            <Footer />
        </div>
    );
}
export default App;
