import logo from './logo.svg';
import './App.css';
import BlogComp from './components/Blog'

function App() {
  let headerone = <div>LET HEADER ONE</div>
  let content = <div>
    <h1> App JS </h1>
    <p>Prf<b>Bold</b><i>ITALIC</i><b>--</b>{5/2} - {5/2 == 2.5 ? "YES" : "NO"}</p>
    <img src={logo} alt="Logo" className='App-Logo'/>
    {headerone}
  </div>
  return (
    <div className="App">
      {content}
     <BlogComp/>
     
      {/*<BlogComp></BlogComp>*/}


    </div>
  );
} 

export default App;
 