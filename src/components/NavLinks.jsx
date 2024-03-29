import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'cart', text: 'cart' },
  { id: 5, url: 'checkout', text: 'checkout' },
  { id: 6, url: 'orders', text: 'orders' },
]


const FooterLinks = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  
]

export const Navlinks = ({hover})=>{
  const user = useSelector((state)=>state.userState.user)
  return (
    <>
    {Links.map((link)=>{
      const {id, url, text}=link;
      
      if ((url === 'orders' || url === 'checkout') &&!user) return null
      
      return (
        <li key={id}>
          <NavLink  to ={url} className={`capitalize ${hover}`} >
        {text}
      </NavLink>
        </li>
      )
    })}
    </>
  )
}

export const Footerlinks =({hover})=>{
  return (
    <>
    {FooterLinks.map((link)=>{
      const {id, url, text} =link
      return (
        <li key={id}>
          <NavLink to={url} className={`capitalize ${hover}`}>
            {text}
          </NavLink>
        </li>
      )
      
    })}
    
    </>
  )
}