import { useEffect, useState } from "react";

export default function SearchTest() {
    const [results, setResults] = useState([]);

    const fetchRande = async () => {
        const response = await fetch("/api/date-search/results");
        const data = await response.json();
        console.log(data);
        setResults(data);
    };

    useEffect(() => {
        fetchRande();
    }, []);

    return (
        <>
            <h2>Search results page</h2>
            <div className="search-results">
                <ul>
                    {results.map((rande, i) => (
                        <p key={i}>Rande name: {rande.name}</p>
                    ))}
                </ul>
            </div>
        </>
    );
}
