import styled from 'styled-components';

const BurguerStyle = styled.div`
  .mobile-menu {
    cursor: pointer;
    display: none;
  }

  .mobile-menu div {
    width: 32px;
    height: 2px;
    background: #fff;
    margin: 8px;
    transition: .5s;
  }

  @media (max-width: 999px) {

.mobile-menu {
  display: block;
  margin-left: 200%;
}

.mobile-menu .line1 {
  transform: ${({ open }) => open ? 'rotate(-45deg) translate(-8px, 8px)' : null };
}

.mobile-menu .line2 {
  opacity:  ${({ open }) => open ? 0 : null };
}

.mobile-menu .line3 {
  
  transform: ${({ open }) => open ? 'rotate(45deg) translate(-5px, -7px)' : null };
}


  }
`;

export default BurguerStyle;
