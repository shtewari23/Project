import logo from "./logo.svg";
import Headers from "./Header";
import "./App.css";
import MenuBar from "./Menu";
import ProjectScope from "./ProjectScope";
import CompanyProfile from "./CompanyProfile";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <Headers></Headers>
      <ProjectScope></ProjectScope>
      <CompanyProfile></CompanyProfile>
      <Footer></Footer>
    </div>
  );
}

export default App;
