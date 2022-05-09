import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = (props: any) => {

    return (
        <Container className="footer asset-detail">
            <Row xs={1}>
                <Col>
                    <span><a href="">Guidelines</a>{' | '}</span>
                    <span><a href="">FAQ</a>{' | '}</span>
                    <span><a href="">Lists</a>{' | '}</span>
                    <span><a href="">API</a>{' | '}</span>
                    <span><a href="">Security</a>{' | '}</span>
                    <span><a href="">Legal</a>{' | '}</span>
                    <span><a href="">Apply to YC</a>{' | '}</span>
                    <span><a href="">Contact</a></span>
                </Col>
                <Col className='pt-2'>
                    <span>Search: <input type="text"></input></span>
                </Col>
            </Row>
        </Container>
    );
}