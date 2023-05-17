import React from 'react'
import Filter from '../components/Filter'
import BookLists from '../components/BookLists'

const Home = () => {
  return (
    <main className="py-12 px-6 2xl:px-6 container">
    <div className="order-2 xl:-order-1">
    <Filter />
    <BookLists />
    </div>
    </main>
  )
}

export default Home