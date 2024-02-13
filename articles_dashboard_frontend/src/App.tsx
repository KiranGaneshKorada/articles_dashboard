import MainbarComponent from "./components/Mainbar/MainbarComponent";
import SidebarComponent from "./components/Sidebar/SidebarComponent";
import { QueryClient, QueryClientProvider } from "react-query";


const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="row container-fluid m-0 p-0">
        <div className="col-2 border-end"><SidebarComponent/></div>
        <div className="col-10 border-start"><MainbarComponent/></div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
