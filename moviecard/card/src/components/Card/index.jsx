
import Button from "../Button"
import styles from"./styles.module.css"


export default function Card({title, posterImg }) {
    return (
        <div className = {styles.container}>
            <img className={styles.poster} src={posterImg} alt={title}/>
            <div>
                <h2 >{title}</h2>
                <p>Um pôster decorativo do manga de Dorohedoro, com Moldura de MDF e tamanho A3. Uma ótima recordação da história do manga. Não perca a chance de adicionar esta memória a seu acervo</p>
               <Button text= "Comprar agora"/>
                </div>
                 </div>
    )
}