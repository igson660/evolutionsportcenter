import styled from 'styled-components';

const NavRightStyle = styled.div`

ul {
    list-style: none;
    display: flex;
  }

  li {
    letter-spacing: 3px;
    margin-left: 32px;
    transition: .3s;
  }

  li:hover {
    border-bottom: 1px solid #fff;
  }

a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    opacity: 0.7;
  }

@media (max-width: 999px) {
    ul {
      position: absolute;
      top: 18vh;
      right: 0;
      width: 50vw;
      height: 82vh;
      background: #23232e;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transition: transform 0.3s ease-in;
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
      z-index: 1000;
    }

    li {
      margin-left: 0;
      opacity: 1;
    }

    .mobile-menu {
      display: block;
    }

  }
`;

export default NavRightStyle;
