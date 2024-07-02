import './Header.css'
import Avatar from './AvatarPeople'
import TrustedCompanies from './TrustedCompanies'

function Header() {
    return (
        <>
        <div className="header-grid-background w-full">
        <div className="home mx-auto w-full container">
            <h1 className='text-7xl text-left py-10 w-3/4 leading-[4.5rem]'>This is my <span className='colored-text'>React.js blog</span>. <br /> This title is only a test for this website<span className='text-6xl colored-text'>.</span></h1>
            <p className='w-2/3 text-left text-gray-400 font-normal py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint placeat, necessitatibus tenetur, illo mollitia voluptatum ex veniam velit sunt consequatur officia facere minus ducimus nobis enim est doloremque eius dolore?
                Voluptatem id placeat nemo similique nam perspiciatis omnis officia blanditiis. Vitae nam, tempore itaque veniam tempora neque? Quod modi quibusdam ullam possimus unde accusamus nisi doloremque ipsam! Nisi, consequatur libero!
                </p>
            <div className="flex justify-start items-center gap-4 mb-[4rem]">
            <button className='w-[8rem] hover:bg-purple-800 hover:scale-105 flex items-center justify-center bg-none border-2 border-purple-500 rounded-[0.5rem] text-left text-white font-normal p-2'>
                View all
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-2 h-6 w-6">
                    <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                </svg>
            </button>
            <Avatar />
            <div className="flex flex-col text-start justify-start items-start clients-satisfied">
                <h1 className='text-md font-normal text-start'>1000+</h1>
                <p className='text-sm font-light text-left text-gray-400'>Satisfied clients</p>
            </div>
            </div>
            <div className='flex justify-center items-center flex-col mt-10'>
            <TrustedCompanies />
            </div>
        </div>
        </div>
        <hr className='w-full mx-auto border-[#ffffff21]'/>
        </>
    )
}

export default Header