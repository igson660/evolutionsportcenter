import styled from 'styled-components';

const HeaderStyle = styled.nav`

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: sans-serif;
    background: #23232e;
    height: 18vh;
  }

  .logoImage {
    width: 14vh;
    height: 14vh;
  } 
  .logo:hover {
    opacity: 50%;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    opacity: 0.7;
  }
`;

export default HeaderStyle;
