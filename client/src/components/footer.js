import React from 'react';
import Button from "@material-ui/core/Button";

import Section from "./sections/section";

class Footer extends React.Component {

    render() {
        return (
            <Section backgroundColor={"#1d1d1d"} color={"#f5f5f5"}>
                    <h2>Thank You For Hearing Me</h2>
                    <h1>Liked What You Saw?</h1>
                    <Button size={"large"}
                            color={"inherit"}
                            variant="outlined"
                            href={"mailto:ofircohen270@gmail.com"}>
                        Contact Me Today
                    </Button>
            </Section>
        )
    }
}

export default Footer;
