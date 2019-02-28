import React from 'react';
import '../css/HomePage/homepage.css';
import Logo from '../logo.png';

const HomePage = () => {
    return (
        <React.Fragment>

            <div className="greeting">

                <h1>
                    <p className='comment'>{`<h1>`}</p>
                    Hi,<br />
                    I'm<img className="F" src={Logo} alt="" />ilip,<br />
                    web developer.
            </h1>
                <p className='comment'>{`</h1>`}</p>
                <p>Front End Web Developer / React</p>
            </div>
            <img className="logo" src={Logo} alt="" />


        </React.Fragment >

    );
}

export default HomePage;