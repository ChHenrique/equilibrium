// SearchProvider.js
import React, { useEffect, useState, createContext } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [psicologos, setPsicologos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPsicologos = async () => {
            try {
                const response = await fetch("http://localhost:3000/user/psicologos");
                if (!response.ok) {
                    throw new Error("Erro ao buscar psicólogos");
                }
                const data = await response.json();
                setPsicologos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPsicologos();
    }, []);

    return (
        <SearchContext.Provider value={{ psicologos, loading, error }}>
            {children}
        </SearchContext.Provider>
    );
}

