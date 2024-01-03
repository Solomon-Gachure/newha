import About from "./components/about";
import Feedback from "./components/feedback";
import Footer from "./components/footer";
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
      <Footer/>
     
    </div>
  );
}

export default App;
