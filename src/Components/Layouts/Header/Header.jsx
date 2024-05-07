// import React from 'react'
import './Header.css';
import { Image } from '../../Ui/Image/Image';
import { Navbar } from '../../Ui/Navbar/Navbar';
import { ItemNavbar } from '../../Ui/ItemNavbar/ItemNavbar';
import { FaLinkedinIn,FaWhatsapp,FaGithub } from 'react-icons/fa';
import { Line } from '../../Ui/Line/Line';
import imgProf from '../../../assets/Images/yo.jpg'
import imgSena from '../../../assets/Images/Sena.png'

export const Header = () => {
  return (
    <header>
        <Image src={imgProf} style='Image' />
        <h1>Santiago Aguirre</h1>
        <Line style='Line'/>
        <Navbar/>
      
        <Image src={imgSena} style='img-sena'/>
        <ul className='icons-ul'>
          <ItemNavbar style='icons' href='' content={<FaLinkedinIn />}/>
          <ItemNavbar style='icons' href='' content={<FaWhatsapp />}/>
          <ItemNavbar style='icons' href='' content={<FaGithub />}/>
        </ul>
    </header>
  ) 
}