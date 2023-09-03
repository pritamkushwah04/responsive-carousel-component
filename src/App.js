import Carousals from "./Components/Carousals";
import Navbar from "./Components/Navbar";
// rgba(203, 213, 225)

function App() {
  return (
    <div className="h-screen overflow-hidden bg-[#CBD5E1]">
      <Navbar />
      <div className="text-center p-8 ">
        <h2 className="text-5xl">Featured Products</h2>
        <h4 className="text-md">Explore annd discover a variety of products</h4>
      </div>
      <Carousals />
    </div>
  );
}

export default App;
