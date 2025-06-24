import React from 'react'

const Footer = () => {
  return (
    <footer >
      <div className="col-span-full flex flex-col items-center py-3 bg-[#fbbf95] font-md  text-center">
          <p>© 2025 QueensHub. All rights reserved.</p>
          <br />
          <p>
            <a href="#" className="underline">Privacy Policy</a> | 
            <a href="#" className="underline ml-2">Terms of Service</a>
          </p>
        </div>
    </footer>
  )
}

export default Footer