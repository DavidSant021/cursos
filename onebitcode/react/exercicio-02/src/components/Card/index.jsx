import styles from './style.module.css'
import Button from '../Button'

export default function Card({title, img}) {
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={img} alt={title} />
            <div>
                <h2 className={styles.title}> {title} </h2>
                <p className={styles.description}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <Button />
            </div>
        </div>
    )
}