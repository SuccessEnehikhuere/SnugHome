import React from 'react'
import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({text, size}) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
 
  return (
    <button
      type="submit"
      className={`btn bg-[#D87D4A] btn-block capitalize text-white hover:bg-[#FBAF85] 
      ${size}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-spinner"></span>loading...
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  )
}

export default SubmitBtn