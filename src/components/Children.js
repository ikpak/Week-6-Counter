import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Children(props) {
    let state = useSelector(state => state)

    let dispatch = useDispatch()

    let eachBgColor = state.boxList[props.id]
    let allBgColor = state.bgColor

    return (
        <div className="box" style={{color: state.color, backgroundColor: eachBgColor ? eachBgColor : allBgColor}}>
            <h2>Colorful Box {props.id}</h2>
            <form className="form">
                <div className="inputLabel">
                    <label>Change Individual Box Color:</label>
                </div>
                <input type="text" placeholder="Enter color name" 
                    onChange={
                        (e) => dispatch({
                            type: 'eachBgColor', 
                            payload: {
                                id: props.id, 
                                value: e.target.value
                            }
                        })
                    } 
                />
            </form>
        </div>
    )
}
