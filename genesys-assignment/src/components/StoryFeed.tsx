import React, { useEffect, useState } from 'react';
import { getTopStories } from '../api/HackerNews';
import { StoryComponent } from './StoryComponent';

export const StoryFeed = (props: any) => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    getTopStories()
      .then((res: any) => setStories(res))
  }, [])

  return (
    <div >
      { stories.map(story => <StoryComponent {...story }/>) }
    </div>
  );
}
