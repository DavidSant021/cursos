import styles from "./style.module.css"

export default function ProfileSection(props) {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}