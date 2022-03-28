import React from 'react';
import { Button } from '../../globalStyles';
// import { GiCrystalBars } from 'react-icons/gi';
import {  GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  ThreeSection,
  ThreeWrapper,
  ThreeHeading,
  ThreeContainer,
  ThreeCard,
  ThreeCardInfo,
  ThreeCardIcon,
  ThreeCardH1,
  ThreeCardH2,
  ThreeCardH3,
  ThreeCardFeatures,
  ThreeCardFeature
} from './ThreeSections.elements';

function ThreeSections() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <ThreeSection>
        <ThreeWrapper>
          <ThreeHeading>Our Services</ThreeHeading>
          <ThreeContainer>
            <ThreeCard to='/sign-up'>
              <ThreeCardInfo>
                <ThreeCardIcon>
                  <GiRock />
                </ThreeCardIcon>
                <ThreeCardH1>Starter Pack</ThreeCardH1>
                <ThreeCardH2>$99.99</ThreeCardH2>
                <ThreeCardH3>per month</ThreeCardH3>
                <ThreeCardFeatures>
                  <ThreeCardFeature>100 New Users</ThreeCardFeature>
                  <ThreeCardFeature>$10,000 Budget</ThreeCardFeature>
                  <ThreeCardFeature>Retargeting analytics</ThreeCardFeature>
                </ThreeCardFeatures>
                <Button primary>Choose Plan</Button>
              </ThreeCardInfo>
            </ThreeCard>
          </ThreeContainer>
        </ThreeWrapper>
      </ThreeSection>
    </IconContext.Provider>
  );
}
export default ThreeSections;