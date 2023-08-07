import {useState, useEffect} from 'react'

import styles from './Message.module.css'

function Message ({type,msg}) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {

        if(!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const time = setTimeout (() =>{
            setVisible(false)
        }, 3000)

        return () => clearTimeout(time)

    }, [msg])

    return (
        <>
            {visible && (            
            <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )}
        </>
    )
}

export default Message