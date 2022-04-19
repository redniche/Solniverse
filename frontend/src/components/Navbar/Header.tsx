import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { toggleThemeAtom, toggleSidebarAtom } from "atoms";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

interface LinkProps {
  children: React.ReactNode;
  to: string;
}

const ActiveLink = ({ children, to }: LinkProps) => {
  const { pathname } = useLocation();
  return (
    <Link to={to}>
      <Active isActive={pathname === to}>{children}</Active>
    </Link>
  );
};

const Active = styled.a<{ isActive: Boolean }>`
  &:hover {
    color: #3395f4;
  }
  color: ${(props) => (props.isActive ? "#3395f4" : props.theme.textColor)};
`;

export default function Header() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useRecoilState(toggleThemeAtom);
  const setIsSidebar = useSetRecoilState(toggleSidebarAtom);

  return (
    <Nav>
      <Col>
        <Logo onClick={() => navigate(`/mypage`)}>Solniverse</Logo>
        <List>
          <Element>
            <ActiveLink to="/donation-history">후원 내역</ActiveLink>
          </Element>
          <Element>
            <ActiveLink to="/nft-reward">NFT 리워드</ActiveLink>
          </Element>
          <Element>
            <ActiveLink to="/service-center">고객센터</ActiveLink>
          </Element>
        </List>
        <Icons>
          <ThemeToggle onClick={() => setIsDark((prev) => !prev)}>
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </ThemeToggle>
          <SidebarToggle onClick={() => setIsSidebar((prev) => !prev)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </SidebarToggle>
        </Icons>
      </Col>
    </Nav>
  );
}

const SidebarToggle = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const ThemeToggle = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Element = styled.li`
  padding: 0 28px;
  line-height: 72px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const Col = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 60px;
  padding: 0 24px;
  max-width: 364px;

  @media screen and (min-width: 767px) {
    max-width: 630px;
    padding: 0;
  }
  @media screen and (min-width: 1024px) {
    height: 72px;
    max-width: 952px;
  }
  @media screen and (min-width: 1439px) {
    max-width: 1296px;
  }
`;

const Nav = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  background: ${(props) => props.theme.bgColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;