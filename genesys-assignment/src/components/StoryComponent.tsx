import React, { useState } from 'react';
// import type { Story } from '../api/HackerNews';
import {
    Container,
    Row,
    Col,
    Button
} from 'react-bootstrap'

//TODO: move domain stripping util
const domainRegex = /:\/\/(.[^/]+)/;

export const StoryComponent = (props: any) => {
    // rank, descendants = comments, time, author
    const {
        title,
        score,
        url,
        deleted,
        by,
        descendants,
        time,
    } = props;

    const [isHidden, setHidden] = useState(deleted ?? false);


    /* TODO:
        buttons: upvote, hide, comments, user page?
        text display: Title, Domain, Submitted By,
        CSS
        ability to un-hide posts
    
    */
   return isHidden ? <></> : <Container className="story-card">
       <Row>
            <Col xs={9} className="asset-title">
                <a href={url}>
                {title}
                </a>
            </Col>
            <Col xs={3} className="asset-detail align-right">
                {`(${url.match(domainRegex)[1]})`}
            </Col>
       </Row>
       <Row>
            <Col className="asset-detail" sm={9}>
                Submitted by {by} at {new Date(time).toString()}
            </Col>
            <Col className="asset-detail align-right">
                
            </Col>
       </Row>
       <Row>
           <Col>
                <Button className="asset-button" size="sm">Upvote</Button>
                <Button className="asset-button" size="sm" onClick={() => setHidden(!isHidden)}>Hide</Button>
                <Button className="asset-button" size="sm">Comment ({descendants} comments)</Button>
           </Col>
       </Row>
   </Container>;
}