import React from 'react'
import './Navbar.css'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar';

export const Navbar = () => {
  return (
    <nav>   
        <ul className='ul-nav'>
            <ItemNavbar content='Perfil' href='' style='list'/>
            <ItemNavbar content='Proyectos' href='' style='list' />
            <ItemNavbar content='Referencias' href='' style='list'/>
            <ItemNavbar content='Experiencia' href='' style='list'/>
        </ul>
    </nav>
  )
}
