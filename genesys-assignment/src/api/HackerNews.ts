export const getTopStories = async () => {
    const storyIds = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .catch(console.error);

    // TODO: paging, breakup API, etc.

    const stories = await Promise.all(storyIds.map(
        (id: number) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
    ))

    return stories;
}