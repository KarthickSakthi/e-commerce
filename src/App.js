
import './App.css';
import data from './components/back/data/Data'
import Header from './components/front/Header/Header';
import Routes from './components/front/Routes/Routes';
function App() {
  const{productItems}=data;
  return (
    <div className="App">
    <Header/>
    <Routes/>
    </div>
  );
}

export default App;
