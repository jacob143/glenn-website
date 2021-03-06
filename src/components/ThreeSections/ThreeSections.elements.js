import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const ThreeSection = styled.div`
  padding: 75px 0 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
`;

export const ThreeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ThreeHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const ThreeHeading2 = styled.h1`
  color: #fff;
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ThreeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const ThreeCard = styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;
  &:nth-child(2) {
    margin: 24px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const ThreeCardInfo= styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
`;

export const ThreeCardIcon = styled.div`
  margin: 24px 0;
`;

export const ThreeCardH1 = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`;

export const ThreeCardH2 = styled.h4`
  font-size: 40px;
`;

export const ThreeCardH3 = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const ThreeCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const ThreeCardFeature = styled.li`
  margin-bottom: 10px;
`;

export const ThreeCardImg = styled.img`

`; 
