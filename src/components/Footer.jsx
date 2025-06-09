import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='container mx-auto flex items-center justify-between mt-10 text-white py-5 max-sm:flex-col'>
      <p className='mb-2 p-2'>© 2024 Forest. Todos os direitos reservados.</p>
      <ul className='flex gap-4 font-serif'>
        <li className='hover:underline hover:underline-offset-8'>Instagram</li>
        <li className='hover:underline hover:underline-offset-8'>Linkedin</li>
        <li className='hover:underline hover:underline-offset-8'>Facebook</li>
        </ul>

    </div>
    </>
  )
}

export default Footer