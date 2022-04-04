import styled from "styled-components";
import ImgBg from '../../images/wedding_img.jpg'

export const HeroContainer = styled.div`
background: linear-gradient(to bottom, rgba(209, 236, 255,0.75),
rgba(209, 236, 255, 0.75)), url(${ImgBg});
z-index: 1;
width: 100%;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;
padding: 160px 0;
background-position: center;
background-size: cover;
max-height: 100%; 
 
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }

`
export const HeroContent = styled.div`
height: calc(100vh, -80px);
max-height: 100%; 
width: 110vh; 
padding: 0rem calc((100vw - 1300px)/2); 
`

export const HeroItems = styled.div`
display: flex;
flex-direction: column; 
justify-content: center; 
align-items: flex-start;
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
max-height: 100%; 
color: #fff; 
line-height: 1; 

@media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`

export const HeroH1 = styled.h1`
margin-bottom: 24px;
text-transform: uppercase;
font-weight: bold; 
font-size: 56px;
line-height: 1.1;
font-weight: 600;
box-shadow: 3px 5px #25499D; 
letter-spacing: 3px;  
color: #000; 
`

export const HeroP = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 22px;
  line-height: 24px; 
  color: #000;
`
