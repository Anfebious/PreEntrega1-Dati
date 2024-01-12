import logo from './logo.svg';
import Navbar from "./components/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer 
      greeting1='"Happy Berry Pasteleria" Este nombre podría traducirse como baya feliz y lo elegimos con el propósito de definir, de la manera más fiel a nuestra filosofía, las sensaciones y sabores que podrán degustar con nuestros postres.'
      greeting2="Originalmente pensábamos en asentarnos en mi Venezuela natal. Pero desde 2018 nos establecimos en Buenos Aires, Argentina, con el objetivo y la convicción de llevar un bocado de felicidad a todo el mundo, uniendo lo mejor de dos mundos."
      greeting3="Utilizando productos de calidad, sabores nuevos y técnicas modernas ofrecemos una propuesta única en pastelería. Incorporando sabores frutales con los postres tradicionalmente dulces de Argentina."
    />
    </>
  );
}

export default App;
