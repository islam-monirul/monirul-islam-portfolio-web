import React from "react";
import useAuth from "./../../hooks/useAuth";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Homepage = () => {
  const { user, logout } = useAuth();

  const history = useHistory();

  return (
    <div>
      <h1>This is Homepage</h1>
      {user?.email && (
        <Button
          className="bg-transparent text-white border-0 headerLogoutBtn"
          onClick={() => logout(history)}
        >
          <span>Logout</span>
        </Button>
      )}
    </div>
  );
};

export default Homepage;
