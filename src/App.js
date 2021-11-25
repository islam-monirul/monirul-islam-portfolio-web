import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Pages/Authentication/Login/Login";
import Homepage from "./Pages/Homepage/Homepage";
import PrivateRoute from "./Pages/Authentication/PrivateRoute/PrivateRoute";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard/AdminDashboard";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/adminDashboard">
            <AdminDashboard />
          </PrivateRoute>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
