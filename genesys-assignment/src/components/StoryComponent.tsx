import React from 'react';
// import type { Story } from '../api/HackerNews';

export const StoryComponent = (props: any) => {
    const {
        title,
        score,
        url
    } = props;

    return (<div>
        {title}
        {score}
        {url}
    </div>)
}