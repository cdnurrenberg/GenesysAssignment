export type Story = {
    id: number,
    deleted?: boolean,
    type?: "job" | "story" | "comment" | "poll" | "pollopt",
    by?: string,
    time: number,
    dead?: boolean,
    parent?: number,
    poll?: any,
    kids?: number[],
    url?: string,
    score: number,
    title?: string,
    parts?: any,
    descendants?: number
}

export const getTopStoryIds= () => {
    return new Promise<number[]>((resolve, reject) => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => response.json())
            .then(resolve)
            .catch(reject);
    })
}

export const getStoryRange = (startIdx: number, endIdx: number) => {
    return new Promise((resolve, reject) => {
        getTopStoryIds()
            .then((ids: number[]) => ids.slice(startIdx, endIdx))
            .then((selectedIds: number[]) => Promise.all(
                selectedIds.map(
                    (id: number) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                        .then(res => res.json())
                )
            ))
            .then(resolve)
            .catch(reject);
    })
}

// TODO: Break up API into utilities / modular calls