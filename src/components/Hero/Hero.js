import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../../globalStyles';
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroP, 
} from './Hero.elements'

function Hero(
) {
  return (
      <HeroContainer>
        <HeroContent>
            <HeroItems>
                <HeroH1>We Get It</HeroH1>
                <HeroP>Everything is an event from brushing your hair, washing your car, getting your lawn and garden tended to. 
Then onto a convention, a tour,  graduation,wedding, private party, a visit from the queen, or from the Pope. 
We strive to be that one contact that will and can facilitate all. (Okay, most). Of your wishes. </HeroP>
            </HeroItems>
            <Link to='/about'><Button>See what we have to offer!</Button>
            </Link>
        </HeroContent>
     </HeroContainer> 
  );
}

export default Hero;
