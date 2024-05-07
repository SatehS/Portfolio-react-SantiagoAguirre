// import React from 'react'
import './Titles.css'
import { Image } from '../Image/Image';
import imgSena from '../../../assets/Images/Sena.png'


// eslint-disable-next-line react/prop-types
export const Titles = ({content,style,styleImg}) => <h2 className={style}><Image src={imgSena} style={styleImg}/>{content}</h2>