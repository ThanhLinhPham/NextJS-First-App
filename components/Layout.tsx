import Head from "next/head";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavbarMenu from "./NavbarMenu";

const Layout = (props: any) => {
  const { children } = props;
  return (
    <Container>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Next App </title>
      </Head>
      <header>
        <NavbarMenu />
      </header>
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
