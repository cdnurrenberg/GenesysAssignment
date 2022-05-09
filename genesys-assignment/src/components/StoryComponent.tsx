import { isVisible } from '@testing-library/user-event/dist/utils';
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
        rank, 
        score,
        url,
        deleted,
        by,
        descendants,
        time,
    } = props;

    const [isHidden, setHidden] = useState(false);
    const [isUpvoted, setUpvoted] = useState(false);
    const changeHiddenCallback = () => setHidden(isVisible => !isVisible);
    const changeUpvoteCallback = () => setUpvoted(vote => !vote)

    /* TODO:
        buttons: upvote, hide, comments, user page?
        text display: Title, Domain, Submitted By,
        CSS
        ability to un-hide posts, but not deleted posts
    
    */

    if (deleted) {
        // Don't display deleted posts at all.
        return <></>;
    }

    const hiddenComponent = <Container className="story-card hidden">
        <Row className="asset-detail">
            <Col xs="auto">This story has been hidden.</Col>
            <Col>
                <Button className="asset-button asset-detail" variant="outline-warning" size="sm"  onClick={changeHiddenCallback}>Unhide?</Button>
            </Col>
        </Row>
    </Container>;

   return isHidden ? hiddenComponent : <Container className="story-card">
       <Row>
            <Col xs={"auto"} className="score  align-center">
                <Row>
                    {`No. ${rank}`}
                </Row>
                <Row className="asset-detail">
                    {score + isUpvoted}
                    <br />
                    points
                </Row>
            </Col>
            <Col>
                <Row>
                    <Col xs={9} className="asset-title">
                        <a href={url}>
                            {title}
                        </a>
                    </Col>
                    <Col xs={3} className="asset-detail align-right">
                        {url ? `(${url.match(domainRegex)[1]})` : ''}
                    </Col>
                </Row>
                <Row>
                    <Col className="asset-detail" xs={9}>
                        Submitted by {by} at {new Date(time).toString()}
                    </Col>
                    <Col className="asset-detail align-right">
                            
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="asset-button asset-detail" variant="outline-warning" size="sm" onClick={changeUpvoteCallback}>Upvote</Button>
                        <Button className="asset-button asset-detail" variant="outline-warning" size="sm" onClick={changeHiddenCallback}>Hide</Button>
                        <Button className="asset-button asset-detail" variant="outline-warning" size="sm">Comment ({descendants} comments)</Button>
                    </Col>
                </Row>
            </Col>
       </Row>
   </Container>;
}