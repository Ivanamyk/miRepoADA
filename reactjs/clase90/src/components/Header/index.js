import React from 'react'
import { Nav } from '../../components'

export const Header = (props) => {
   
    return(
        <header>
            <div>
                Esta es la cabecera de mi web
            </div>
            <Nav items={props.menuItems} />
        </header>
    )
}
