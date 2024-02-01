import axios from 'axios'

// const productUrl = 'https://www.thecocktaildb.com/'

const productUrl = ' https://strapi-store-server.onrender.com/api'

 export const customFetch = axios.create({
  baseURL: productUrl,
})

export const getAmountOptions = (number)=>{
  return Array.from({length:number}, (_, index)=>{
    const amount = index + 1;
    return <option key={amount} value={amount}>
     {amount}
    </option>

  })
}

export const formatPrice = (price)=>{
  const dollarsAmount = new Intl.NumberFormat('en-US', { 
    style: 'currency',
    currency: 'USD',
  }).format((price/100).toFixed(2));
  return dollarsAmount
}