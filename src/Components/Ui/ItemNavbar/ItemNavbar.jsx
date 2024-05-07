import React from 'react'
import './ItemNavbar.css'

export const ItemNavbar = ({content, style,href}) => <li><a className={style} href={href}>{content}</a></li>
