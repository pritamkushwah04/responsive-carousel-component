import Carousals from "./Components/Carousals";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar/> 
       <div className="text-center p-8 bg-slate-300">
        <h2 className="text-7xl">Featured Products</h2>
        <h4 className="text-2xl">Explore annd discover a variety of products</h4>
      </div>
      <Carousals/>
    </div>
  );
}

export default App;
