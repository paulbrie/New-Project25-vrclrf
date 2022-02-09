import React from 'react'

// new line, just for fun

const Widget1 = ({ title, color }: { title: string, color: string }) => {
    return (<div style={{ color: color || '' }}>{title}</div>)
}

export default Widget1