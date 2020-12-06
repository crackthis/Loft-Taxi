import React from "react";
import './heroLogo.css';
import herologo from './../../shares/icons/hero-logo.png';

export class HeroLogo extends React.Component {

    render(props) {
        return <>
                <div className="hero" style={{maxWidth: this.props.maxWidth}}>
                    <div className="hero__logo">
                        <img src={herologo} alt="Loft Taxi" className="hero__logo-pic"/>
                    </div>
                </div>
            </>
    }
}