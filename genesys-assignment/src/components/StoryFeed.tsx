import React, { useEffect, useState } from 'react';
import { getTopStories } from '../api/HackerNews';
import { StoryComponent } from './StoryComponent';

export const StoryFeed = (props: any) => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    getTopStories()
      .then((res: any) => setStories(res))
  }, [])

  //  TODO: Suspense / loading 
  return (
    <div className="story-feed">
      { stories.map((story, i) => <StoryComponent key={i} {...story } rank={i}/>) }
    </div>
  );
}
