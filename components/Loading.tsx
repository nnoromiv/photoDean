import React from 'react'

const Loading = () => {
  return (
    <div className='flex w-[100vw] bg-white dark:bg-base-200 h-[100vh] items-center justify-center'>
        <span className="loading loading-dots bg-base-200 loading-lg dark:bg-white"></span>
    </div>
  )
}

export default Loading