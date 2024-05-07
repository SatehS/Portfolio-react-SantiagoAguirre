// import React from 'react'
import './Main.css'
import { Titles } from '../../Ui/Titles/Titles';
import { Line } from '../../Ui/Line/Line';
import { Paragraph } from '../../Ui/Paragraph/Paragraph';
import { Card } from '../../Ui/Card/Card';
import { References } from '../../Ui/References/References';
import imgCard from '../../../assets/Images/programming.webp'

export const Main = () => {
  return (
    <main>
      <Titles style='box-h2' styleImg='imgTitle' content='PERFIL' />
      <Line style='line-main' />
      <Paragraph content='Hola, Soy Santiago Aguirre y me encuentro 
      en un viaje apasionante por el mundo de la programación. 
      Desde mis inicios, he cultivado un profundo interés por las tecnologías 
      que dan vida a las aplicaciones y plataformas digitales que utilizamos a diario. 
      Esta fascinación me ha impulsado a adquirir un sólido conocimiento en lenguajes de 
      programación como Javascript, TypeScript, MySQL y CSS, y actualmente me encuentro en la 
      emocionante etapa de adentrarme en el mundo de React.'/>
      <Titles style='box-h2' styleImg='imgTitle' content='PROYECTOS' />
      <Line style='line-main' />
      <div className='container-card'>
        <Card style='box-card' styleImg='imgCard' src={imgCard} contentBox='contentP' href='' styleP='styleP' styleH='styleH' />
        <Card style='box-card' styleImg='imgCard' src={imgCard} contentBox='contentP' href='' styleP='styleP' styleH='styleH' />
        <Card style='box-card' styleImg='imgCard' src={imgCard} contentBox='contentP' href='' styleP='styleP' styleH='styleH' />
        <Card style='box-card' styleImg='imgCard' src={imgCard} contentBox='contentP' href='' styleP='styleP' styleH='styleH' />
      </div>
      <Titles style='box-h2' styleImg='imgTitle' content='REFERENCIAS' />
      <Line style='line-main' />

      <div className='container-references'>
        <References styleDiv='box-references' style=''/>
        <References styleDiv='box-references' style=''/>
        <References styleDiv='box-references' style=''/>
      </div>
      <Titles style='box-h2' styleImg='imgTitle' content='EXPERIENCIA' />
    </main>
  )
}


