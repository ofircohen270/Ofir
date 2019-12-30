import React from 'react';
import {FaFacebook, FaInstagram, FaEnvelope} from 'react-icons/fa'

class SocialMediaIcon extends React.Component {
    render() {
        return (
            <span>
                <a className={"social-media-icon"}
                   href={this.props.network.link}
                   target="_blank"
                   rel="noopener noreferrer">{this.props.network.icon({size: 30})}</a>
            </span>
        )
    }
}

class Network {
    constructor(icon, link) {
        this.icon = icon;
        this.link = link
    }
}

class SocialMedia extends React.Component {

    NETWORKS = [
        new Network(FaFacebook, "https://www.facebook.com/profile.php?id=100012581311894"),
        new Network(FaInstagram, "https://www.instagram.com/ofir_c/"),
        new Network(FaEnvelope, "mailto:ofircohen270@gmail.com")
    ];

    render() {
        return (
            <div>
                {this.NETWORKS.map((network, key) =>
                    <SocialMediaIcon network={network} key={key}/>)}
            </div>
        )
    }
}

export default SocialMedia;

