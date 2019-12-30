import React from 'react';
import {Container} from '@material-ui/core'
import Fade from "react-reveal/Fade";

class Section extends React.Component {

    STYLE = {
        padding: "100px 0",
        textAlign: "center"
    };

    render() {
        return (
            <section style={{
                ...this.STYLE,
                color: this.props.color,
                backgroundColor: this.props.backgroundColor
            }}>
                <Container>
                    <Fade delay={200}>
                        {this.props.children}
                    </Fade>
                </Container>
            </section>
        )
    }
}

export default Section;
