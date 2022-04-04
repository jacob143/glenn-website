import React from 'react';
import { Button } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import {
  ThreeSection,
  ThreeWrapper,
  ThreeHeading,
  ThreeHeading2,
  ThreeContainer,
  ThreeCard,
  ThreeCardInfo,
  ThreeCardIcon,
  ThreeCardH1,
  ThreeCardH2,
  ThreeCardH3,
  ThreeCardFeatures,
  ThreeCardFeature,
  ThreeCardImg
} from './ThreeSections.elements';

function ThreeSections() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <ThreeSection>
        <ThreeWrapper>
          <ThreeHeading>Everything is an event to us!</ThreeHeading>
          <ThreeContainer>
            <ThreeCard to='/Contact'>
              <ThreeCardInfo>
                <ThreeCardIcon>
                  {/* <GiRock /> */}
                </ThreeCardIcon>
                <ThreeCardH1>Tours</ThreeCardH1>
                <ThreeCardH2>$99.99</ThreeCardH2>
                <ThreeCardH3>per month</ThreeCardH3>
                <ThreeCardFeatures>
                  <ThreeCardFeature>100 New Users</ThreeCardFeature>
                  <ThreeCardFeature>$10,000 Budget</ThreeCardFeature>
                  <ThreeCardFeature>Retargeting analytics</ThreeCardFeature>
                </ThreeCardFeatures>
              </ThreeCardInfo>
            </ThreeCard>
            <ThreeCard to='/Contact'>
              <ThreeCardInfo>
                <ThreeCardIcon>
                </ThreeCardIcon>
                <ThreeCardH1>Convenctions</ThreeCardH1>
                <ThreeCardH2>$99.99</ThreeCardH2>
                <ThreeCardH3>per month</ThreeCardH3>
                <ThreeCardFeatures>
                  <ThreeCardFeature>100 New Users</ThreeCardFeature>
                  <ThreeCardFeature>$10,000 Budget</ThreeCardFeature>
                  <ThreeCardFeature>Retargeting analytics</ThreeCardFeature>
                </ThreeCardFeatures>
              </ThreeCardInfo>
            </ThreeCard>
            <ThreeCard to='/Contact'>
              <ThreeCardInfo>
                <ThreeCardIcon>
                </ThreeCardIcon>
                <ThreeCardImg></ThreeCardImg>
                <ThreeCardH1>Private Parties</ThreeCardH1>
                <ThreeCardH2>$99.99</ThreeCardH2>
                <ThreeCardH3>per month</ThreeCardH3>
                <ThreeCardFeatures>
                  <ThreeCardFeature>100 New Users</ThreeCardFeature>
                  <ThreeCardFeature>$10,000 Budget</ThreeCardFeature>
                  <ThreeCardFeature>Retargeting analytics</ThreeCardFeature>
                </ThreeCardFeatures>
              </ThreeCardInfo>
            </ThreeCard>
          </ThreeContainer>
          <ThreeHeading2>And much more! Whatever the occasion is, we can make it happen!</ThreeHeading2>
          <Link to='/About'><Button primary>See for yourself!</Button></Link>
        </ThreeWrapper>
      </ThreeSection>
    </IconContext.Provider>
  );
}
export default ThreeSections;