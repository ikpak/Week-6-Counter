import React from 'react'
import { useSelector } from 'react-redux'

export default function Children() {
    let color = useSelector(state => state.color)

    return (
        <div className="box" style={{color: color, backgroundColor: 'blue'}}>
            <h2>Colorful Box</h2>
        </div>
    )
}
