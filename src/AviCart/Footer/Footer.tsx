

export default function Footer() {
  return (
    <div>
      
      <footer className={`bg-black text-white flex justify-between py-4 fixed w-full bottom-0`}>
          <div className="px-5">@ 2024  Made by Avinash</div>
          <div>
            <ul className='flex px-5'>
              <li className='px-5 hover:text-blue-500 hover:underline '>Terms & Conditions</li>
              <li className='px-5 hover:text-blue-500 hover:underline '>Privacy</li>
              <li className='px-5 hover:text-blue-500 hover:underline '>Contact Us</li>
 
            </ul>
          </div>
      </footer>
    
    </div>
  )
}
