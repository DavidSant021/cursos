import { Link, useParams } from "react-router-dom";
import products from "../database.json"

export default function Product() {
    const { productId } = useParams()

    const product = products.find(p => p.id === +productId) // Uso o + para converter para número pois o retorno é uma string

    if (!product) {
        return (
            <h2>Ops... Esse produto não foi encontrado</h2>
        )
    }

    return (
        <section>
            <Link to="/products">
                <button>Voltar</button>
            </Link>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>R$ {product.price}</p>
            <button>Comprar</button>
        </section>
    )
}