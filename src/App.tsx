import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className="flex max-w-[100%]  ">
    <Sidebar/>
    {/* <Navbar/> */}
    <div className="min-w-[85%] ">
      <Navbar/>
      {/* home container */}
    </div>
    </div>
  );
}

export default App;
