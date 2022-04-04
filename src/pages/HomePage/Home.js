import React from 'react';
import { ThreeSections, Hero, InfoSectionnoBtn } from '../../components';
import { homeObjTwo} from './Data';

const Home = () => {
  return (
    <>
      <Hero/>
      <ThreeSections /> 
      <InfoSectionnoBtn {...homeObjTwo}/>
    </>
  );
}

export default Home;
