import React from 'react';
import './css/about/about.css'
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../sketch';
const About = () => {
    return (
        <React.Fragment>
            <p className='abcomment'>{`<h1>`}</p>
            <h1 id="h1">About me</h1>
            <p className='abcomment'>{`</h1>`}</p>
            <p className='abcomment'>{`<p>`}</p>
            <p id="firstp">
                I'm Filip,<br />
                I was born in Poland in 2003.<br />
                I was always interestend in IT.<br />
                One day i came across web development <br />
                tutorial and I thought it would be cool<br />
                to create my own website.<br />
                So I did. <br />
                I know React, JS, HTML and css on a good level<br />
            </p>

            <p id="secondp">
                Although I live in Poland<br />
                I can speak English Flawlessly<br />
                Sometimes with some mistakes ;)<br />
                but I can comunicate with people relatively easy<br />
                I'm looking forward to graduate college.<br />
                I'am self-taught Front-End developer.<br />
                And I love my job.<br />
            </p>
            <p className='abcomment'>{`</p>`}</p>
            <P5Wrapper sketch={sketch} rotation={10} />
        </React.Fragment>
    );
}

export default About;