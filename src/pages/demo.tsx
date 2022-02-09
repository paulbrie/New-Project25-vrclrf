import React from 'react'

import Component from '../teleporthq/components/component'
import styles from '../teleporthq/style.module.css'

const Demo = () => {
    return (<div>Demo Page
        <h1 className={styles['red']}>This is a title</h1>
        <Component heading="Hello this is a local attribute" />
        <p>
            Lorem Ipsum and ...
        </p>
    </div>)
}

export default Demo