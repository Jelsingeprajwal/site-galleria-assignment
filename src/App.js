import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import data from './data/mcqs.json'
function App() {
  return (
    <div className="App">
      <Header />
      <Hero data={data} />
      <Footer />
    </div>
  );
}

export default App;
