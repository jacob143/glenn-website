import React from 'react';
import { InfoSection, ThreeSections } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <ThreeSections /> 
      <InfoSection {...homeObjFour}/>
    </>
  );
}

export default Home;
