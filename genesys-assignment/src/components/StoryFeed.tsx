import React, { useEffect, useState } from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import { getStoryRange } from '../api/HackerNews';
import { StoryComponent } from './StoryComponent';

const STORIES_PER_PAGE = 20;

export const StoryFeed = (props: any) => {

  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setLoading(true);
    getStoryRange(STORIES_PER_PAGE * pageNumber, STORIES_PER_PAGE * (pageNumber + 1))
      .then((res: any) => {
        setStories(res);
        setLoading(false);
      })
  }, [pageNumber])

  //  TODO: Suspense / loading 
  return (
    <Container className="story-feed">
      { loading ? <> Loading </> : stories.map((story, i) => 
        <StoryComponent
          key={i}
          rank={(STORIES_PER_PAGE * pageNumber + i + 1)}
          {...story }
        />) 
      }
      { loading ? <></> : <Row className="justify-content-center">
          <Button
            className="asset-detail"
            disabled={pageNumber === 0}
            size="sm"
            variant="outline-warning"
            onClick={() => setPageNumber(n => n - 1)}
          >
            Previous Page
          </Button>
          <Button
            className="asset-detail"
            disabled={pageNumber === 19}
            size="sm"
            variant="outline-warning"
            onClick={() => setPageNumber(n => n + 1)}
          >
            Next Page
          </Button>
        </ Row >
      }
    </Container>

  );
}
