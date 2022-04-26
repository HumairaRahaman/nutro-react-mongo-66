import React from 'react'

const NotFound = () => {
  return (
    <section className='px-4 py-32 mx-auto max-w-7xl'>
      <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto md:w-4/5 lg:grid-cols-2 xl:gap-32'>
        <div>
          <p className='mb-2 text-cyan-400 text-xs font-semibold tracking-wide uppercase'>
            Error 404
          </p>
          <h1 className='mb-4 text-cyan-600 text-2xl font-extrabold leading-tight tracking-tight text-left md:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-500'>
            Oops! The page you're looking for isn't here.
          </h1>
          <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
            You might have the wrong address, or the page may have moved.
          </p>
         
        </div>
        <div>
          <div className='w-full h-full bg-gray-200 rounded-lg '>
            <img className=' rounded-2xl'
              src='https://miro.medium.com/max/1400/1*qdFdhbR00beEaIKDI_WDCw.gif'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound
