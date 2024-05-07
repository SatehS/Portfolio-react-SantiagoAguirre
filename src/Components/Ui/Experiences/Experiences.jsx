import React from 'react'
import { Image } from '../Image/Image';
import { Paragraph } from '../Paragraph/Paragraph';
import { Line } from '../Line/Line';

export const Experiences = ({content,boxFooter,styleLine,styleIMG,src,classP}) => {
  return (
    <div className={boxFooter}>
        <Image src={src} style={styleIMG}/>
        <Line style={styleLine}/>
        <Paragraph style={classP} content={content}/>
    </div>
  )
}
