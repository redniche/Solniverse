import styled from "styled-components";
import Header from "./Navbar/Header";
import Backdrop from "./Navbar/Backdrop";
import Sidebar from "./Navbar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  canGoBack?: boolean;
}

export default function Layout({ children, title, canGoBack }: LayoutProps) {
  return (
    <>
      <Header />
      <Backdrop />
      <Sidebar />
      <Base>{children}</Base>
    </>
  );
}

const Base = styled.div`
  margin: 0 auto;
  padding-top: 60px;
  max-width: 364px;

  @media screen and (min-width: 767px) {
    max-width: 630px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 72px;
    max-width: 952px;
  }
  @media screen and (min-width: 1439px) {
    max-width: 1296px;
  }
`;