import React from "react";
import type { DataItem, Animal, Livro, Pessoa } from "../types";
import { useFavoritos } from "../context/FavoritosContext";
import './Card.css';

interface CardProps {
    item: DataItem;
}

const isAnimal = (item: DataItem): item is Animal => 'especie' in item;
const isLivro = (item: DataItem): item is Livro => 'autor' in item;
const isPessoa = (item: DataItem): item is Pessoa => 'area' in item;

const Card: React.FC<CardProps> = ({ item }) => {
    const { addFavorito, removeFavorito, isFavorito } = useFavoritos();
    const favorito = isFavorito(item.id);

    const handleToggleFavorito = () => {
        if (favorito) {
            removeFavorito(item.id);
        } else {
            addFavorito(item);
        }
    }

    return (
        <div className="card">
            {isAnimal(item) && (
                <>
                    <h3>{item.nome} (Animal)</h3>
                    <p>Espécie: {item.especie}</p>
                    <img src={item.imagem} />
                </>
            )}
            {isLivro(item) && (
                <>
                    <h3>{item.titulo} (Livro)</h3>
                    <p>Autor: {item.autor}</p>
                    <p>Ano: {item.ano.toString()}</p>
                    <img src={item.capa} />
                </>
            )}
            {isPessoa(item) && (
                <>
                    <h3>{item.nome} (Pessoa)</h3>
                    <p>Data de Nascimento: {item.nascimento}</p>
                    <p>Área: {item.area}</p>
                    <img src={item.foto} />
                </>
            )}
            <button onClick={handleToggleFavorito}>
                {favorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
            </button>
        </div>
    )
}

export default Card;