import dados from '../dados.json';
import Card from '../components/Card';
import type { Animal } from '../types';
import { useState } from 'react';

const Animais = () => {
    const [animais] = useState<Animal[]>(dados.animais);

    return (
        <div>
            <h2>Catálogo de Animais</h2>
            <div className="card-container">
                {animais.map((animal) => (
                <Card key={animal.id} item={animal} />
                ))}
            </div>
        </div>
    )
}

export default Animais;