import React from 'react';
import { InfoSection, ThreeSections, InfoSectionnoBtn } from '../../components';
import { homeObjTwo, homeObjThree, homeObjFour } from './Data';

const About = () => {
  return (
    <>
      <InfoSectionnoBtn {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <ThreeSections /> 
      <InfoSectionnoBtn {...homeObjFour}/>
    </>
  );
}

export default About;