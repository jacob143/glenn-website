import React from 'react';
import { ThreeSections, Hero, InfoSection_noBtn } from '../../components';
import { homeObjTwo} from './Data';

const Home = () => {
  return (
    <>
      <Hero/>
      <ThreeSections /> 
      <InfoSection_noBtn {...homeObjTwo}/>
    </>
  );
}

export default Home;
