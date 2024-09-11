import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <div className="main_container">
      <Header />
      <div className="main_layout">
        <div className="sidebar_container">
        <Sidebar />
        </div>
        <div className="page_container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
