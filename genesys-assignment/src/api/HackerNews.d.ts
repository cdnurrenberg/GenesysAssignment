export interface Story {
    id: number,
    deleted?: boolean,
    type?: "job" | "story" | "comment" | "poll" | "pollopt",
    by?: string,
    time?: number,
    dead?: boolean,
    parent?: number,
    poll?: any,
    kids?: number[],
    url?: string,
    score?: number,
    title?: string,
    parts?: any,
    descendants?: number
}

export default function getTopStories(): Story[];