import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "antd";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Log In with Auth0 </Button>;
};

export default LoginButton;