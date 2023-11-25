import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='h-screen bg-slate-800 p-5 flex justify-start flex-col items-center'>
      <h1 className='font-mono text-4xl text-white mt-12'>Welcome to MUTAGEN</h1>
      <Link to='/characters' className='font-mono text-3xl text-white mt-12 bg-teal-800 rounded-xl px-5 py-3 hover:scale-105 cursor-pointer'>View Characters</Link>
    </div>
  )
}
