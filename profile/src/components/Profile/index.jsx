import styles from "./styles.module.css"

export default function Profile(props) {
    return(
        <div className={styles.container}>
            
            <img className={styles.avatar}src={props.avatar} alt={props.name}/>
            <h2 className={styles.name}>{props.name}</h2>
            <div>{props.bio}</div>
            <div>{props.email}</div>
            <div>{props.phone}</div>
            <div className={styles.links}>
            <a href={props.githubUrl} target="_blank">Github</a>
            <a href={props.LinkedinUrl} target="_blank">Linkedin</a>
            <a href={props.Twiter} target="_blank">Twiter</a>
            </div>
        </div>
    )
}