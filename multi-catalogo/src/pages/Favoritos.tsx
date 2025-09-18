import { useFavoritos } from '../context/FavoritosContext';
import Card from '../components/Card';

const Favoritos = () => {
    const { favoritos } = useFavoritos();
    return (
        <div>
            <h2>Meus Favoritos</h2>
            {favoritos.length === 0 ? (
                <p>Você ainda não adicionou nenhum item aos favoritos.</p>
                ) : (
                <div className="card-container">
                    {favoritos.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Favoritos;