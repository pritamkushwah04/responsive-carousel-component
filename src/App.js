import Carousals from "./Components/Carousals";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="bg-slate-300 h-screen overflow-hidden">
      <Navbar/> 
       <div className="text-center p-8 bg-slate-300">
        <h2 className="text-5xl">Featured Products</h2>
        <h4 className="text-md">Explore annd discover a variety of products</h4>
      </div>
      <Carousals/>
    </div>
  );
}

export default App;
