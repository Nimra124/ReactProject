import "./App.css";
import Router from "./Components/Router";
import Auth_Router from './Components/Auth0/Auth0_Routes'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div>
      <Auth_Router/>
      {/* <Router /> */}
    </div>
  );
}

export default App;
