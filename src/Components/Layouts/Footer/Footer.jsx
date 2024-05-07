// import React from 'react'
import './Footer.css'
import { Experiences } from '../../Ui/Experiences/Experiences';
import react from '../../../assets/Images/React.png'
import node from '../../../assets/Images/Node.png'
import mongo from '../../../assets/Images/Mongo.png'
import java from '../../../assets/Images/Java.png'



export const Footer = () => {
  return (
    <footer>
      <div className='container-footer'>
        <Experiences src={react} styleIMG='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src={node} styleIMG='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src={mongo} styleIMG='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
        <Experiences src={java} styleIMG='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter'/>
      </div>
    </footer>
  )
}
