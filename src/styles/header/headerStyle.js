import styled from 'styled-components';

const Head = styled.header`
  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: sans-serif;
    background: #23232e;
    height: 12vh;
  }

  .logoImage {
    width: 10vh;
    height: 10vh;
  } 
  .logo:hover {
    opacity: 50%;
  }

  .logo {
    text-decoration: none;
    transition: 0.3s;
    margin: auto 0;
  }

  .logo:hover {
    opacity: 0.7;
  }
`;

export default Head;
