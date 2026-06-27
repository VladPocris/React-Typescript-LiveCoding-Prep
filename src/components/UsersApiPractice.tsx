import { useState, useEffect } from "react"

type User = {
    id: number;
    name: string;
    email: string;
};

export default function UsersApiPractice() {
    const [users, setUsers] = useState<User[]>([])
    const [isFetching, setIsFetching] = useState<boolean>(true)
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>("");
    const [debouncedQuery, setDebouncedQuery] = useState<string>("");

    function handleFetchAPICallUsers(controller?: AbortController) {
        const url = "https://jsonplaceholder.typicode.com/users"
        const fetchUsers = async () => {
            setIsFetching(true);
            setError(null);
            try {
                const response = await fetch(url, {
                    signal: controller?.signal
                })
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result: User[] = await response.json();
                setUsers(result)

            } catch (err) {
                if (err instanceof DOMException && err.name === "AbortError") {
                    return;
                }
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Something went wrong.")
                }
            } finally {
                setIsFetching(false);
            }
        }

        fetchUsers();
    }

    useEffect(() => {
        const controller = new AbortController();
        handleFetchAPICallUsers(controller)
        return () => { controller.abort() }
    }, [])

    useEffect(() => {
        const handler = handleDebounce(query);
        return () => clearTimeout(handler);
    }, [query])

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setQuery(value);
        setIsSearching(value.length > 0);
    }

    function handleDebounce(value: string) {
        const handler = setTimeout(() => {
            setDebouncedQuery(value);
            setIsSearching(false);
        }, 500)
        return handler;
    }

    const filteredUsers = users.filter(user => (user.name.toLowerCase().includes(debouncedQuery.toLowerCase())))
    const usersToDisplay = query.length > 0 ? filteredUsers : users;

    return (
        <div className="topic users-api-practice">
            <h1>Search</h1>
            <input
                type="text"
                placeholder="Search users..."
                value={query}
                onChange={handleInputChange}
                className="search-input"
            />
            {isSearching && <p className="status-message">Searching users...</p>}
            {isFetching && <p className="status-message">Loading users...</p>}
            {error &&
                (
                    <>
                        <p className="error-message">Error: {error}</p>
                        <button onClick={() => handleFetchAPICallUsers()} className="retry-button">Retry</button>
                    </>
                )
            }
            <ul className="user-list">
                {usersToDisplay.length > 0
                    ? usersToDisplay.map(user => (
                        <li key={user.id} className="user-item">
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                        </li>
                    ))
                    : <p>No users found.</p>
                }
            </ul>
        </div >
    )
}