import React from 'react'
import { store } from '../store'
import { toast } from 'react-toastify'
import { customFetch } from '../utilis'
import { useLoaderData } from 'react-router-dom'
import {OrdersList, OrdersPagination, SectionHeading} from '../components'

 const ordersQuery = (params, user) =>{
    return {
      queryKey: [
        'orders',
        user.username,
        params.page ? parseInt(params.page) : 1,
      ],
      queryFn : ()=> customFetch.get('/orders', {params, 
      headers:{
        Authorization: `Bearer ${user.token}`
    }})
    }
  }


export const loader  = (store, queryClient) => async({request})=>{
  const user = store.getState().userState.user
  if(!user) {
    toast.warn('please login to proceed')
    redirect('/login')
  }
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()])

  try {
    const response = await queryClient.ensureQueryData(ordersQuery(params, user))

    return{orders: response.data.data, meta: response.data.meta}

    
    

  } catch (error) {
    console.log(error)
    const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error accessing your orders';

      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) return redirect('/login');

      return null;
    }
  }

 
 


const Orders  = () => {
  const {meta} = useLoaderData()

  if(meta.pagination < 1) {
    return <SectionHeading text='please place an order'/>
  }
  return (
    <>
    <SectionHeading text='your orders'/>
    <OrdersList />
    <OrdersPagination/> 
    </>
  )
}

export default Orders