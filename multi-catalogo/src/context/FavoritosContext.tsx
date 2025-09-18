import React, { createContext, useState, useContext, type ReactNode } from "react";
import type { DataItem } from "../types";

interface FavoritosContextType {
    favoritos: DataItem[];
    addFavorito: (item: DataItem) => void;
    removeFavorito: (id: String) => void;
    isFavorito: (id:String) => boolean;
}

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

interface FavoritosProviderProps {
    children: ReactNode;
}

export const FavoritosProvider: React.FC<FavoritosProviderProps> = ({ children }) => {
    const [favoritos, setFavoritos] = useState<DataItem[]>([]);

    const addFavorito = (item: DataItem) => {
        setFavoritos((prevFavoritos) => [...prevFavoritos, item]);
    }

    const removeFavorito = (id: String) => {
        setFavoritos((prevFavoritos) => prevFavoritos.filter((item) => item.id !== id));
    }

    const isFavorito = (id: String) => {
        return favoritos.some((item) => item.id === id);
    }

    return (
        <FavoritosContext.Provider value={{ favoritos, addFavorito, removeFavorito, isFavorito }}>
            {children}
        </FavoritosContext.Provider>
    );
}

export const useFavoritos = () => {
    const context = useContext(FavoritosContext);
    if (context === undefined) {
        throw new Error('useFavoritos deve ser usado dentro de FavoritosProvider');
    }
    return context;
}