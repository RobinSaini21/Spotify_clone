import React from 'react'
import "./sideBarOption.css"

function SiderbarOption({title, Icon  }) {
    return (
        <div className ="sideBarOption">
            {Icon && <Icon className = "sideBarOption_icon"/>}
         {Icon ? <h4>{title}</h4> : <p>{title}</p>} 
        </div>
    )
}

export default SiderbarOption
