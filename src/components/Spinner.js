import { ImSpinner2 } from 'react-icons/im'
import styles from '../styles/Spinner.module.css'

export function Spinner(){
    return (
        <div className={styles.spinner}>
            <ImSpinner2 className={styles.spinnig} size={60}/>
        </div>
    )
}