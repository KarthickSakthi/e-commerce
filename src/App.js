
import './App.css';
import data from './components/back/data/Data'
import Header from './components/front/Header/Header';
import Routes from './components/front/Routes/Routes';

function App() {
  const{productItems}=data;
  console.log("prods app.js "+productItems)
  return (
    <div className="App">
      {/*22:17*/}
    <Header/>
    <Routes productItems={productItems}/>
    </div>
  );
}

export default App;
