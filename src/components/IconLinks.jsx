import twitterLogo from '../assets/images/Path.svg'
import fbLogo from '../assets/images/fb.svg'
import instaLogo from '../assets/images/shape.svg'

import React from 'react'

const Links = [
  { id: 1, icon:  fbLogo  },
  { id: 2, icon: instaLogo},
  { id: 3, icon: twitterLogo },
]

const IconWrapper = ({ children }) => (
  <div className="hover:cursor-pointer object-cover w-6 h-6 hover:text-warning">{children}</div>
)

const IconLinks = () => {
  return (
    <div className='flex gap-x-6'>
    {Links.map((link)=>{
      const {id, icon}=link
      return (
        <IconWrapper key={id} >
          <img src={icon}/>
        </IconWrapper>
        
      )
    })}
    </div>
  )
}


  
export default IconLinks