import dados from '../dados.json';
import Card from '../components/Card';
import type { Pessoa } from '../types';
import { useState } from 'react';

const Pessoas = () => {
    const [pessoas] = useState<Pessoa[]>(dados.pessoas);

    return (
        <div>
            <h2>Catálogo de Pessoas</h2>
            <div className="card-container">
                {pessoas.map((pessoa) => (
                <Card key={pessoa.id} item={pessoa} />
                ))}
            </div>
        </div>
    )
}

export default Pessoas;