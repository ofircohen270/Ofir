import React from 'react';
import Fade from 'react-reveal/Fade'
import SocialMedia from './socialMedia'

import '../../App.css'
class Banner extends React.Component {

    render() {
        return (
            <div className={"banner"}>
                <Fade bottom>
                    <h1 className={"banner-title"}>Ofir Cohen</h1>
                </Fade>
                <Fade bottom delay={500}>
                    <p  className={"banner-text"}>
                        Hello there! I am a web developer dedicated to developing and optimizing interactive,
                        user-friendly and feature-rich websites.
                    </p>
                </Fade>
                <Fade bottom delay={1000}>
                    <SocialMedia/>
                </Fade>
            </div>
        )
    }
}

export default Banner;
