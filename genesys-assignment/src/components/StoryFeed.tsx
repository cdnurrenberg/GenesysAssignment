import React, { useEffect, useState } from 'react';
import { getTopStories } from '../api/HackerNews';
import { StoryComponent } from './StoryComponent';

const STORIES_PER_PAGE = 20;

export const StoryFeed = (props: any) => {

  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getTopStories()
      .then((res: any) => {
        setStories(res);
        setLoading(false);
      })
  }, [])

  //  TODO: Suspense / loading 
  return (loading ? <> Loading </> : 
    <div className="story-feed">
      { stories.map((story, i) => <StoryComponent key={i} {...story } rank={i + 1}/>) }
    </div>
  );
}
