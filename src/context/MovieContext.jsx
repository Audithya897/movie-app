import { createContext , useState } from "react";
export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    return (
        <MovieContext.Provider value={{
            setPage,
            page,
        }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieProvider;