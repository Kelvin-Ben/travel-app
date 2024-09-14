import styled from "@emotion/styled/macro";
import { keyframes } from "@emotion/react";

export const theme = {
  colors: {
    primary: '#03045e',
    secondary: '#caf0f8',
    tertiary: '#023e8a',
    quanternary: '#fff',
  },
  fonts: {
    primary: 'helvetica',
  },
  fontSize: {
    primary: '20px',
    secondary: '14px',
  }
}

export const LogoSpin = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
    }
`

// create and export styled components along with the animation and theming
export const CardWrapper = styled.div`
  width: 250px;
  height: 380px;
  background: ${(props) => props.theme.colors.quanternary};
  border-radius: 15px;
  padding-bottom: 5px;
  @media (max-width: 900) {
    width: 400px
  }
`;

export const ImageWrapper = styled.img`
  object-fit: cover;
  width: 100%;
  height: 60%;
  border-radius: 15px 15px 0 0;
`;

export const TextWrapper = styled.div`
  padding: 0;
  height: auto;
`;

export const TitleWrapper = styled.h2`
  margin-left: 5px;
  margin-bottom: 5px;
  font-size: 24px;
  font-weight: normal;
`;

export const DescriptionWrapper = styled.h3`
  font-size: ${(props) => props.theme.fontSize.secondary};
  color: #023eBa;
  margin-left: 5px;
  margin-top: 0;
`;


export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;


export const PrimaryButton = styled.button`
  background-color: #03045e;
  color: #caf0f8;
  width: 40%;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  padding: 12px 0;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.047, 1);
  border: none;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  }
`;

export const SecondaryButton = styled.button`
  background-color: #caf0f8;
  color: #030445e;
  width: 40%;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  padding: 12px 0;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.047, 1);
  border: none;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  }
`;