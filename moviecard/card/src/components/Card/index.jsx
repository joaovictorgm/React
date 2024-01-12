import posterImg from "../../assets/dorohedoro.png"
import styles from"./styles.module.css"

export default function Card() {
    return (
        <div className = {styles.container}>
            <img className={styles.poster} src={posterImg} alt="Dorohedoro Poster"/>
            <div>
                <h2 className = {styles.title}>Poster do manga Dorohedoro</h2>
                <p className = {styles.description}>Um pôster decorativo do manga de Dorohedoro, com Moldura de MDF e tamanho A3. Uma ótima recordação da história do manga. Não perca a chance de adicionar esta memória a seu acervo</p>
                <button className={styles.button}>Comprar agora</button>
                </div>
                 </div>
    )
}