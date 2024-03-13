import styles from "./style.module.css"

export default function ProfileSection(props) {
    return (
        <div 
            {...props}
            className={`${styles.wrapper} ${props.className}`}
        >
            {props.children}
        </div>
    )
}