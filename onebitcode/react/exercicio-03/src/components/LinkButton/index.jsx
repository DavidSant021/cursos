import styles from "./style.module.css"

export default function LinkButton(props) {
    return (
        <a 
            className={styles.wrapper} 
            href={props.href} 
            target="_blank"
        >
            {props.children}
        </a>
    )
}