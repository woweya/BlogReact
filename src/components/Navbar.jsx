import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar w-full p-4 mb-10">
            <ul className='flex justify-center w-full uppercase items-center gap-4'>
                <li className='text-md hover:cursor-pointer hover:scale-105'>Home</li>
                <li className='text-md hover:cursor-pointer hover:scale-105'>About us</li>
                <li className='text-md hover:cursor-pointer hover:scale-105'>Articles</li>
                <li className='text-md hover:cursor-pointer hover:scale-105'>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar