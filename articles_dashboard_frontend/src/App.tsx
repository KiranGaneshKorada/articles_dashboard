import MainbarComponent from "./components/Mainbar/MainbarComponent";
import SidebarComponent from "./components/Sidebar/SidebarComponent";

function App() {
  return (
    <>
      <div className="row container-fluid m-0 p-0">
        <div className="col-2 border-end"><SidebarComponent/></div>
        <div className="col border-start"><MainbarComponent/></div>
      </div>
    </>
  );
}

export default App;
