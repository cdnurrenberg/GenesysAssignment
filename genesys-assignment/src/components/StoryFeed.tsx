import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { getStoryRange } from '../api/HackerNews';
import { StoryComponent } from './StoryComponent';
import type { Story } from '../api/HackerNews';
import { Button } from "./Button";

const STORIES_PER_PAGE: number = 20;

export const StoryFeed: React.FC = () => {

  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState<number>(0);

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
      { loading ? <div className="loading">
          <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading"/>
        </div> : 
        stories.map((story: Story, i: number) => 
          <StoryComponent
            key={i}
            rank={(STORIES_PER_PAGE * pageNumber + i + 1)}
            {...story }
          />
        ) 
      }
      { loading ? <></> : <Row xs="auto" className="justify-content-center">
          <Button
            className="asset-detail asset-button"
            disabled={pageNumber === 0}
            size="sm"
            text="Previous Page"
            onClick={() => setPageNumber(n => n - 1)}
          />
          <Button
            className="asset-detail asset-button"
            disabled={pageNumber === 19}
            size="sm"
            text="Next Page"
            onClick={() => setPageNumber(n => n + 1)}
          />
        </ Row >
      }
    </Container>

  );
}
