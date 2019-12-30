import React from 'react';

import Banner from "./banner";
import background from '../../images/background3.jpg'

import './header.css'

class Header extends React.Component {

    STYLE =
        {
            position: "relative",
            minHeight: "500px",
            textAlign: "left",
            width: "100%",

            // For Vertical align of content
            justifyContent: "center",
            display: "flex",
            WebkitFlexDirection: "column",

            // Background
            background: "no-repeat top center",
            backgroundImage: `url(${background})`,
            WebkitBackgroundSize: "cover !important",
            backgroundSize: "cover !important",
            backgroundAttachment: "fixed"
        }
    ;

    constructor(props) {
        super(props);
        this.state = {
            window: {
                height: 0,
                width: 0
            }
        }
    }

    updateDimensions = () => {
        this.setState({
            window: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        });
    };

    componentWillMount() {
        this.updateDimensions();
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }


    render() {
        return (
            <div style={{...this.STYLE, height: this.state.window.height}}>
                <Banner/>
            </div>
        )
    }

}

export default Header;
