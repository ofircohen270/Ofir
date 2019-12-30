import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import CSS3Logo from '../../images/logos/css3.svg'
import HTMLLogo from '../../images/logos/HTML5.svg'
import ReactLogo from '../../images/logos/react.svg'
import PythonLogo from '../../images/logos/python.svg'
import DjangoLogo from '../../images/logos/django.svg'
import JavaScriptLogo from '../../images/logos/javascript.svg'


import Section from "./section";

const skills = [
    {
        name: "Python",
        icon: PythonLogo
    },
    {
        name: "JavaScript",
        icon: JavaScriptLogo
    },
    {
        name: "HTML",
        icon: HTMLLogo
    },
    {
        name: "Css",
        icon: CSS3Logo
    },
    {
        name: "react",
        icon: ReactLogo
    },
    {
        name: "Django",
        icon: DjangoLogo
    }
];

class Skill extends React.Component {
    render() {
        return (
            <Grid item xs>
                <div><img alt={this.props.name} height={"100px"} src={this.props.icon}/></div>
                <Typography variant="overline">{this.props.name}</Typography>
            </Grid>
        )
    }
}

class Skills extends React.Component {

    render() {
        return (
            <Section backgroundColor={"#7b8a66"} color={"#fcfcfc"}>
                <h1 style={{marginBottom: "50px"}}>My Skills</h1>
                <Grid container spacing={3}>
                    {skills.map((skill, key) =>
                        <Skill key={key} icon={skill.icon} name={skill.name}/>
                    )}
                </Grid>
            </Section>
        )
    }
}

export default Skills;
