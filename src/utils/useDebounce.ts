import { useState, useEffect } from 'react';

export default function useDebounce(query: string, timerDelay: number): [string, boolean] {
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {

        if (query === debouncedQuery) {
            return;
        }

        setIsSearching(true);

        const handler = setTimeout(() => {
            setDebouncedQuery(query);
            setIsSearching(false);
        }, timerDelay);

        return () => clearTimeout(handler);
    }, [query, debouncedQuery, timerDelay])

    return [debouncedQuery, isSearching];
}