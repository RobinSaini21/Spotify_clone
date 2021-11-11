import { Avatar } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import React from 'react'
import { useDataLayerValue } from './DataLayer'
import './Header.css'
// import {useDataLayerValue} from "./StateProvider"

function Header() {
    const [{user},dipatch] = useDataLayerValue();
    return (
        <div className="header">
           <div className="header__left" >
<SearchOutlined />
<input placeholder="Search For Artist, Songs, Other" type="text"></input>
           </div>
           <div className="header__right">

<Avatar src={user?.images} alt={user?.images[0].url}/>
<h4>{user?.diplay_name}</h4>
           </div>
        </div>
    )
}

export default Header
