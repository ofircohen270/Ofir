import React from "react";
import Fab from "@material-ui/core/Fab";
import {FaAngleUp} from 'react-icons/fa'

class ScrollToTopButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
    }

    updateHidden = () => {
        this.setState({hidden: window.scrollY < 300})
    };

    componentDidMount() {
        window.addEventListener('scroll', this.updateHidden);
    }

    scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(this.scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    render() {
        return (
            <Fab style={{
                margin: 0,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
                position: 'fixed',
                zIndex: 1,
                visibility: this.state.hidden ? "hidden" : "",
                opacity: this.state.hidden ? "0" : "1",
                WebkitTransition: "all .3s ease-in-out",
                transition: "all .3s ease-in-out"
            }}
                 onClick={this.scrollToTop}>
                <FaAngleUp size={35}/>
            </Fab>
        )
    }
}

export default ScrollToTopButton;
