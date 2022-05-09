import React from 'react';
import { Container } from 'react-bootstrap';
import logo from "../assets/logo.png";

export const Header: React.FC = (props: any) => {

    return (
        <Container className="header">
            <div className="logo">
                <img src={logo} alt="Hacker News"/> 
            </div>
            <div className="title">Hacker News</div>
            <a href="">News</a>{' | '}
            <a href="">Past</a>{' | '}
            <a href="">Comments</a>{' | '}
            <a href="">Ask</a>{' | '}
            <a href="">Jobs</a>{' | '}
            <a href="">Submit</a>
        </Container>
    );
}