import React from 'react';
import { InfoSection, ThreeSections, InfoSection_noBtn } from '../../components';
import { homeObjTwo, homeObjThree, homeObjFour } from './Data';

const About = () => {
  return (
    <>
      <InfoSection_noBtn {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <ThreeSections /> 
      <InfoSection_noBtn {...homeObjFour}/>
    </>
  );
}

export default About;