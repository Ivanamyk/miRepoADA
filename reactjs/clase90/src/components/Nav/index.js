import React from 'react'
import { List } from '../../components'
import { UserOptions } from './components'

export const Nav = (props) => {
    return (
        <nav>
            <List items={props.items} />
            <UserOptions />
        </nav>
    )
}
