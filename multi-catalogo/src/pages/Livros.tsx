import dados from '../dados.json';
import Card from '../components/Card';
import type { Livro } from '../types';
import { useState } from 'react';

const Livros = () => {
    const [livros] = useState<Livro[]>(dados.livros);

    return (
        <div>
            <h2>Catálogo de Livros</h2>
            <div className="card-container">
                {livros.map((livro) => (
                <Card key={livro.id} item={livro} />
                ))}
            </div>
        </div>
    )
}

export default Livros;