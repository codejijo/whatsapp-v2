import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import Head from "next/head";
import Logo from "next/image";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Login to Whatsapp 2.0</title>
      </Head>
      <LoginContainer>
        <Logo
          src={"/Images/whatsapp.svg"}
          width={200}
          height={200}
          alt="App Logo"
        />
        <MuiButton variant="outlined" onClick={signIn}>
          Sign In With Google
        </MuiButton>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background: #16222a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3a6073,
    #16222a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3a6073,
    #16222a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  box-shadow: 2px 2px 28px 1px rgba(0, 0, 0, 0.3);
`;

const MuiButton = styled(Button)`
  &&& {
    margin-top: 1rem;
  }
  background-color: #fff;
  :hover {
    color: #fff;
  }
`;
