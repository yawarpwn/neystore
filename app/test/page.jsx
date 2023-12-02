import React from 'react'

function Page() {
  return (
    <div className="border border-blue-500 grid grid-cols-2">
      <div className="h-[800px] relative border border-lime-500">
        <div className="sticky top-0 h-[200px] border border-black ">
          ContendioSticky
        </div>
      </div>
      <div className="border border-purple-500">Info Product</div>
    </div>
  )
}

export default Page
