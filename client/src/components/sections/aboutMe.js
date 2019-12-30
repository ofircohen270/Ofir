import React from 'react';

import Section from "./section";

class AboutMe extends React.Component {

    render() {
        return (
            <Section backgroundColor={"#1d1d1d"}>
                <h1 style={{color: "#f5f5f5"}}>About Me</h1>
                <p style={{color: "#b7b7b7"}}>
                    {this.props.aboutMe}
                </p>
            </Section>
        )
    }
}

export default AboutMe;
