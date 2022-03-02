import React from 'react';
import { InfoSection, ThreeSections } from '../../components';
import { homeObjTwo, homeObjThree, homeObjFour } from './Data';

const About = () => {
  return (
    <>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <ThreeSections /> 
      <InfoSection {...homeObjFour}/>
    </>
  );
}

export default About;