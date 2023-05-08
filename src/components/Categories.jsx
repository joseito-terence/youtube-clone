import React from 'react'

const CATEGORIES = ['All', 'Music', 'Arijhit Singh', 'Bollywood Music', 'News', 'Gaming', 'Tamil Cinema', 'Dramedy', 'Salman Khan', 'Cricket', 'History', 'Game show', 'Biology', 'Gadgets']

export default function Categories() {
  return (
    <div className='m-1 d-flex align-items-center gap-2 w-100 pb-2' style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
      {CATEGORIES.map((category, idx) => (
        <a href={`https://www.youtube.com/results?search_query=${category}`} target='_blank'
          key={idx}
          className={`btn btn-${idx == 0 ? 'dark' : 'light'}`}
        >
          {category}
        </a>
      ))}
    </div>
  )
}
