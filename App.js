import React from 'react'
import styles from 'App.css';

function App(props) {
    return (
        <div>
            <div className={styles.app}>
            <header className={styles.header}>
            </header>
            <div className={styles.sidebar} data-testid='MeetingSelector'>

            </div>
            <div className={styles.content}>

            </div>
            <div className={styles.footer}>

            </div>
        </div>
    </div>
    )
}

export default App;