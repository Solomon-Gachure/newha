import About from "./components/about";
import Feedback from "./components/feedback";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Services from "./components/services";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Feedback/>
     
    </div>
  );
}

export default App;
