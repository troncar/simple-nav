import React from 'react';
import styled from 'styled-components';
import './Logo.scss';

const LogoStyled = styled.div `
  width: ${props => props.width || '3rem'};
  height: ${props => props.height || '3rem'};

  img {
    height: ${props => props.height || '3rem'};
  }

`;


const Logo = (props) => {
    return (
      <React.Fragment>
        <LogoStyled width={props.width} height={props.height}>
          <img className="logo__img" src={props.url} alt="Logo"/>
        </LogoStyled>
      </React.Fragment>
    );
}

export default Logo;
