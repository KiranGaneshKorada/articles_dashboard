import SidebarComponent from "./components/Sidebar/SidebarComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";


const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="row container-fluid m-0 p-0">
        <div className="col-3 p-0 border-end">
          <SidebarComponent />
        </div>
        <div className="col-9 border-start">
          <Outlet/>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
