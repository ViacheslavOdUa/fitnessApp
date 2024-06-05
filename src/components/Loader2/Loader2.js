import { CSSTransition } from 'react-transition-group';
import styles from './Loader2.scss';

export const Loadera = () => {

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            timeout={{
                exit: 1500,
            }}
            classNames={{
                enterActive: styles.loader__show,
                exitActive: styles.loader__hide
            }}>

            <div className={styles.loader}>
                <div className={styles.load__man}></div>
            </div>
        </CSSTransition>
    );
}
