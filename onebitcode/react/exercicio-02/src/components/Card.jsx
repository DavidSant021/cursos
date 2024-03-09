import styles from './Card.module.css'

export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContent}>
                <img src=".././starwars.jpg" alt="Pôster do Star Wars" />
            </div>
            <div className={styles.textContent}>
                <h1>Pôster: Star Wars (1977)</h1>
                <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <button>Comprar Agora</button>
            </div>
        </div>
    )
}