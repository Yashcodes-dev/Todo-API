import React from 'react'

const EmptyState = () => {
 return (
    <>
      <div className="flex min-h-[300px] flex-col items-center justify-center px-4 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 ">
        Write your goals for today
      </h2>

      <p className="mt-2 max-w-md text-sm text-gray-500">
        Turn your plans into progress. Add a task and start getting things done.
      </p>
    </div>
    </>
  )
}

export default EmptyState
