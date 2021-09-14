
import './App.css';
import data from './components/back/data/Data'
import Header from './components/front/Header/Header';
function App() {
  const{productItems}=data;
  return (
    <div className="App">
    <Header/>
    </div>
  );
}

export default App;
