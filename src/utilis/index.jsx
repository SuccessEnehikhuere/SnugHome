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
