import logo from './logo.svg';
import './App.css';
import Sections from './Components/Sections';
import Search from './Components/Search';

function App() {
  return (
    <>
    <div className='title'>MyReads</div>
    <Sections/>
    <Search/>
    </>
  );
}

export default App;
