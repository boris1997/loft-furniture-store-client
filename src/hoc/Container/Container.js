import React from 'react'
import containerClasses from './Container.module.scss'

const Container = (props) => {
    return (
        <div className={containerClasses.container}>
            {props.children}
        </div>
    )
}

export default Container
