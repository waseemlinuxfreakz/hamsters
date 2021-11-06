import React from 'react';
import { Link, Container, ToastContainerProps, Accordion, Item, Header, Body } from 'react-bootstrap';
import NavArea from '../components/Nav';
import Collecthead from '../components/Collecthead';
import Collecteyse from '../components/Collecteyes';
import Collectmouth from '../components/Collectmouth';
import Collectskin from '../components/Collectskin';
import Collectcostume from '../components/Collectcostume';

import LongArrow from '../assets/img/logn-arrow.svg';
import BanarImg from '../assets/img/banar_img.png';

import AboutImg1 from '../assets/img/about/about_1.png';
import AboutImg2 from '../assets/img/about/about_2.png';
import AboutImg3 from '../assets/img/about/about_3.png';
import AboutImg4 from '../assets/img/about/about_4.png';
import AboutImg5 from '../assets/img/about/about_5.png';

import PrizeModel from '../assets/img/prizeModal.png';
import CommunityWall from '../assets/img/communityImg.png';
import PrizePool from '../assets/img/prizePool.png';

import Roadmap1 from '../assets/img/roadmap/roadmap-1.png';
import Roadmap2 from '../assets/img/roadmap/roadmap-2.png';
import Roadmap3 from '../assets/img/roadmap/roadmap-3.png';
import Roadmap4 from '../assets/img/roadmap/roadmap-4.png';
import Roadmap5 from '../assets/img/roadmap/roadmap-5.png';
import Roadmap6 from '../assets/img/roadmap/roadmap-6.png';
import Roadmap7 from '../assets/img/roadmap/roadmap-7.png';
import Roadmap8 from '../assets/img/roadmap/roadmap-8.png';
import Roadmap9 from '../assets/img/roadmap/roadmap-9.png';

import Faq from '../assets/img/faq.png';

import Discord from '../assets/img/icons/Discord.svg';

import Twiter from '../assets/img/icons/twiter.svg';
import Facebook from '../assets/img/icons/facebook.svg';
import Pinterest from '../assets/img/icons/Pinterest.svg';

function Home() {
    return (
        <section className="homepareWraoer ">
            <NavArea/>
            <section className="heroarea sectMarg">
                <Container>
                    <div className="banarCont">
                        <div className="banLeft">
                            <h1>RICH <br /> HAMSTERS <br /> CLUB</h1>
                            <a className="blackBtn" href="#" >Contact Us</a>
                            <img src={LongArrow} class="BlackArrow" />
                        </div>
                        <div className="banRight">
                            <img src={BanarImg} class="" alt=""/>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="aboutUsArea sectPadd">
                <Container>
                    <ul className="aboutImgList">
                        <li className="singAbouImg"><img src={AboutImg1} alt="Abot Us Image" /></li>
                        <li className="singAbouImg"><img src={AboutImg2} alt="Abot Us Image" /></li>
                        <li className="singAbouImg"><img src={AboutImg3} alt="Abot Us Image" /></li>
                        <li className="singAbouImg"><img src={AboutImg4} alt="Abot Us Image" /></li>
                        <li className="singAbouImg"><img src={AboutImg5} alt="Abot Us Image" /></li>
                    </ul>
                    <div className="aboutContetn sectiCont">
                        <h2 className="sectTitle">About Us</h2>
                        <p className="secDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </Container>
            </section>
            <section className="roadmapArea sectPadd">
                <div className="container">
                    <h2>roadmap</h2>
                    <div className="raodmapList">
                        <div className="singleRoadmap">
                            <div className="roadMapImg"><img src={Roadmap1} alt="Road Map" /></div>
                            <div className="roadMapCont">
                                <span className="mapNum">01</span>
                                <h3>rich Hamsters Club</h3>
                                <p>9,999 Rich Hamsters are generated and to be launched into Solana NFT space</p>
                            </div>
                        </div>
                        <div className="singleRoadmap">
                            <div className="roadMapImg"><img src={Roadmap2} alt="Road Map" /></div>
                            <div className="roadMapCont">
                                <span className="mapNum">02</span>
                                <h3>giveway</h3>
                                <p>Regular giveway for Twitter & Discord marketing campaigns until the mint day</p>
                            </div>
                        </div>
                        <div className="singleRoadmap">
                            <div className="roadMapImg"><img src={Roadmap3 } alt="Road Map" /></div>
                            <div className="roadMapCont">
                                <span className="mapNum">03</span>
                                <h3>public sales</h3>
                                <p>Get ready.. <br />
                                    It’s the launch day!!</p>
                            </div>
                        </div>
                        <div className="singleRoadmap">
                            <div className="roadMapImg"><img src={Roadmap4 } alt="Road Map" /></div>
                            <div className="roadMapCont">
                                <span className="mapNum">04</span>
                                <h3>secondary market launch</h3> 
                                <p>solanart, digitalEyes, <br />
                                    magicEden, Alpha Art</p>
                            </div>
                        </div>
                        <div className="singleRoadmap">
                            <div className="roadMapImg"><img src={Roadmap5 } alt="Road Map" /></div>
                            <div className="roadMapCont">
                                <span className="mapNum">05</span>
                                <h3>floor sweeping</h3>
                                <p>a fixed amount from the community wallet will be allocted to a weekly floor sweeping.</p>
                            </div>
                        </div>
                        <div className="singleRoadmap">
                            <div className="roadMapImg"><img src={Roadmap6 } alt="Road Map" /></div>
                            <div className="roadMapCont">
                                <span className="mapNum">06</span>
                                <h3>rarity tool</h3>
                                <p>RHC rarity data will be <br />
                                    available on rarity sniper</p>
                            </div>
                        </div>
                        <div className="singleRoadmap">
                            <div className="roadMapImg"><img src={Roadmap7 } alt="Road Map" /></div>
                            <div className="roadMapCont">
                                <span className="mapNum">07</span>
                                <h3>lottery draw</h3>
                                <p>for 6 months post launch, every RHC holders will automatically be entered into a bi-weekly sweepstake. Lottery prize: 10% of the lottery pool each round.</p>
                            </div>
                        </div>
                        <div className="singleRoadmap">
                            <div className="roadMapImg"><img src={Roadmap8 } alt="Road Map" /></div>
                            <div className="roadMapCont">
                                <span className="mapNum">08</span>
                                <h3>rich hamsters club mearch</h3>
                                <p>exclusive rich hamsters club merch will given to ruffles winners.</p>
                            </div>
                        </div>
                        <div className="singleRoadmap">
                            <div className="roadMapImg"><img src={Roadmap9 } alt="Road Map" /></div>
                            <div className="roadMapCont">
                                <span className="mapNum">09</span>
                                <h3>public lottery dashboard</h3>
                                <p>to ensure the lottery pool will not run out, we will develop a lottery dashboard open to public. Anyone can purchase a ticket to enter the lottery draw. Proceeds of the ticket sales will go to the lottery draw. Proceeds of the ticket sales will go to the lottery pool. RHC holders  will automatically enter every draw without a ticket.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hamesterPorper sectPa1">
                <Container>
                    <div className="hamesteCont sectiCont">
                        <h2 className="sectTitle">hamster portraits</h2>
                        <p className="secDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in </p>
                    </div>
                    <div className="hamestarCards">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg2} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <h4>Lorem ipsum dolor</h4>
                                        <p> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg3} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <h4>Lorem ipsum dolor</h4>
                                        <p> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg4} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <h4>Lorem ipsum dolor</h4>
                                        <p> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg5} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <h4>Lorem ipsum dolor</h4>
                                        <p> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="communiWall sectPadd">
                <Container>
                    <h2>Community wallet <br /> chart</h2>
                    <div className="commuImg">
                        <img src={CommunityWall} alt="Community Wallet" />
                    </div>
                </Container>
            </section>
            <section className="prizeModel sectPadd">
                <Container>
                    <h2>Prize model</h2>
                    <div className="commuImg">
                        <img src={PrizeModel} alt="Prize Model" />
                    </div>
                </Container>
            </section>
            <section className="prizePool sectPadd">
                <Container>
                    <h2>INITIAL/CURRENT PRIZE POOL</h2>
                    <div className="commuImg mt-4">
                        <img src={PrizePool} alt="Prize Pool" />
                    </div>
                    <div className="connectWallBtn text-center">
                        <a className="blackBtn" href="#" >connect wallet</a>
                    </div>
                </Container>
            </section>
            <section className="faqContainer sectPad5">
                <Container>
                    <h2 className="text-left">FAQ</h2>
                    <br />
                    <div className="row">
                        <div className="col-md-6">
                            <div className="faqCont">
                                <Accordion defaultActiveKey="">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>What is FAQ?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What is FAQ?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>What is FAQ?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>What is FAQ?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="faqImg">
                                <img src={Faq} alt="" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="joinClubArea sectMar6">
                <Container>
                    <div className="joinClubCont">
                        <h2>join our club</h2>
                        <img src={Discord} alt="Discord" />
                    </div>
                </Container>
            </section>
            <section className="ourTeamArea sectPa1">
                <Container>
                    <div className="hamesteCont sectiCont">
                        <h2 className="sectTitle">our team</h2>
                        <p className="secDesc">A name has been taken... and the team behind ...</p>
                    </div>
                    <div className="hamestarCards">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard teamCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg2} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <ul className="teamSocial">
                                            <li><a href="#"><img src={Twiter} alt="" /></a></li>
                                            <li><a href="#"><img src={Facebook} alt="" /></a></li>
                                            <li><a href="#"><img src={Pinterest} alt="" /></a></li>
                                        </ul>
                                        <h4>STRAWBERRY / ICHIGO</h4>
                                        <p> // Co-CEO, Front-end Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard teamCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg3} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <ul className="teamSocial">
                                            <li><a href="#"><img src={Twiter} alt="" /></a></li>
                                            <li><a href="#"><img src={Facebook} alt="" /></a></li>
                                            <li><a href="#"><img src={Pinterest} alt="" /></a></li>
                                        </ul>
                                        <h4>STRAWBERRY / ICHIGO</h4>
                                        <p> // Co-CEO, Front-end Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard teamCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg4} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <ul className="teamSocial">
                                            <li><a href="#"><img src={Twiter} alt="" /></a></li>
                                            <li><a href="#"><img src={Facebook} alt="" /></a></li>
                                            <li><a href="#"><img src={Pinterest} alt="" /></a></li>
                                        </ul>
                                        <h4>STRAWBERRY / ICHIGO</h4>
                                        <p> // Co-CEO, Front-end Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard teamCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg5} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <ul className="teamSocial">
                                            <li><a href="#"><img src={Twiter} alt="" /></a></li>
                                            <li><a href="#"><img src={Facebook} alt="" /></a></li>
                                            <li><a href="#"><img src={Pinterest} alt="" /></a></li>
                                        </ul>
                                        <h4>STRAWBERRY / ICHIGO</h4>
                                        <p> // Co-CEO, Front-end Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard teamCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg2} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <ul className="teamSocial">
                                            <li><a href="#"><img src={Twiter} alt="" /></a></li>
                                            <li><a href="#"><img src={Facebook} alt="" /></a></li>
                                            <li><a href="#"><img src={Pinterest} alt="" /></a></li>
                                        </ul>
                                        <h4>STRAWBERRY / ICHIGO</h4>
                                        <p> // Co-CEO, Front-end Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard teamCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg3} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <ul className="teamSocial">
                                            <li><a href="#"><img src={Twiter} alt="" /></a></li>
                                            <li><a href="#"><img src={Facebook} alt="" /></a></li>
                                            <li><a href="#"><img src={Pinterest} alt="" /></a></li>
                                        </ul>
                                        <h4>STRAWBERRY / ICHIGO</h4>
                                        <p> // Co-CEO, Front-end Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard teamCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg4} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <ul className="teamSocial">
                                            <li><a href="#"><img src={Twiter} alt="" /></a></li>
                                            <li><a href="#"><img src={Facebook} alt="" /></a></li>
                                            <li><a href="#"><img src={Pinterest} alt="" /></a></li>
                                        </ul>
                                        <h4>STRAWBERRY / ICHIGO</h4>
                                        <p> // Co-CEO, Front-end Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard teamCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg5} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <ul className="teamSocial">
                                            <li><a href="#"><img src={Twiter} alt="" /></a></li>
                                            <li><a href="#"><img src={Facebook} alt="" /></a></li>
                                            <li><a href="#"><img src={Pinterest} alt="" /></a></li>
                                        </ul>
                                        <h4>STRAWBERRY / ICHIGO</h4>
                                        <p> // Co-CEO, Front-end Design</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="rarityArea sectPa1">
                <Container>
                    <div className="hamesteCont sectiCont">
                        <h2 className="sectTitle">rarity</h2>
                        <p className="secDesc">
                            TYPE: Y0K-A1 <br /> 
                            // GHOST SPIRIT (COMMON) <br /> <br /> 
                            These make up the core citizens of Ethereal Enclave. They once lived lives of relative peace, now thrown into the chaos of impending doom.
                        </p>
                    </div>
                    <div className="hamestarCards">
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard rarityCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg2} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <h4>Head</h4>
                                        <p>Y0K-A1 thrive on color and simplicity. They vibe with a clean lo-fi style with a variety of outfits and accessories.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard rarityCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg3} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <h4>Eyes</h4>
                                        <p>Y0K-A1 thrive on color and simplicity. They vibe with a clean lo-fi style with a variety of outfits and accessories.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard rarityCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg4} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <h4>Mouth</h4>
                                        <p>Y0K-A1 thrive on color and simplicity. They vibe with a clean lo-fi style with a variety of outfits and accessories.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard rarityCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg5} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <h4>Skin</h4>
                                        <p>Y0K-A1 thrive on color and simplicity. They vibe with a clean lo-fi style with a variety of outfits and accessories.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="hamesterCard rarityCard">
                                    <div className="mageCarImg">
                                        <img src={AboutImg2} alt="Abot Us Image" />
                                    </div>
                                    <div className="cardCont">
                                        <h4>Costume</h4>
                                        <p>Y0K-A1 thrive on color and simplicity. They vibe with a clean lo-fi style with a variety of outfits and accessories.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className="ourCollectionArea sectPa1">
                <Container>
                    <div className="collecTitle sectiCont mt-0">
                        <h2 className="sectTitle">our collections</h2>
                        <p className="secDesc">check these out! </p>
                    </div>
                    <div className="collecSliderBox">
                        <Collecthead />
                        <Collecteyse />
                        <Collectmouth />
                        <Collectskin />
                        <Collectcostume />
                    </div>
                </Container>
            </section>
        </section>
    )
}

export default Home;
