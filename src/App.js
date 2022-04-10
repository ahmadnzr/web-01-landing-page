import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Overview from "./components/Overview/Overview";
import posts from "./data/posts.json";

function App() {
  const user = {
    name: "AJI",
    role: "Admin",
    address: "Jogja",
  };
  return (
    <div className="App">
      <Navbar userInfo={user} />
      <Overview />
      <News postingan={posts} />
      <Footer />
    </div>
  );
}

export default App;
