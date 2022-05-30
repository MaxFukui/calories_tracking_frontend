import styles from "./Card.module.scss"

function Card(props){
    return (
        <div className={styles.cardWrapper}>
            {props.children}
        </div>
    )
}

export default Card