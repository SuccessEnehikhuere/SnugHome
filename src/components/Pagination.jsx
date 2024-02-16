import React from 'react'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'

const Pagination = () => {
  const { meta } = useLoaderData()
  const { page, pageCount } = meta.pagination

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1
  })

  const { search, pathname } = useLocation()
  const navigate = useNavigate()

  const handlePageCount = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set('page', pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  }

  //The URLSearchParams is a JavaScript class that allows you to work with the query string part of a URL.The query string is the part of a URL that comes after the "?" character and contains key-value pairs separated by "&".
  //.set method is used to set or update a parameter in the query string of a URL.
  //The toString() method in this case returns a string that represents the key-value pairs in the format expected in a URL's query string.

  if (pageCount < 2) return null

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1
            if (prevPage < 1) prevPage = pageCount
            handlePageCount(prevPage)
          }}
        >
          next
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageCount(pageNumber)}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? 'bg-base-300 border-base-300' : ''
              }`}
            >
              {pageNumber}
            </button>
          )
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1
            if (nextPage > pageCount) nextPage = 1
            handlePageCount(nextPage)
          }}
        >
          prev
        </button>
      </div>
    </div>
  )
}

export default Pagination
