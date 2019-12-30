import React from 'react';

import Footer from "./components/footer";
import Header from "./components/header/header";
import Skills from "./components/sections/skills";
import Hobbies from "./components/sections/hobbies";
import AboutMe from "./components/sections/aboutMe";
import Experience from "./components/sections/experience";
import ScrollToTopButton from "./components/scrollToTopButton";

import './App.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            greeting: '',
            aboutMe: "",
            jobs: []
        };
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        if (window.location.hostname === "localhost") {
            let example = require('./resume.json');
            this.setState(example)
        }
        fetch("/api/resume")
            .then(response => response.json())
            .then(state => this.setState(state));
    }

    render() {
        return (
            <div className="App">
                <ScrollToTopButton/>
                <Header/>
                <AboutMe aboutMe={this.state.aboutMe}/>
                <Experience jobs={this.state.jobs}/>
                <Skills/>
                <Hobbies/>
                <Footer/>
            </div>
        );
    }
}

export default App;
