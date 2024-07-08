import './PricingCards.css'

const PricingCards = () => {
    return (
        <div className='bg-class'>
        <section className="w-full container mx-auto py-10">
            <div className="relative">
            <p className='text-xl tracking-[0.4rem] text-purple-400 font-semibold text-center absolute left-[22%]'>PRICING</p>
        <h1 className='text-5xl font-semibold text-center py-10'>One fixed price to get your project done</h1>  
        </div>
        <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-row flex-nowrap gap-10 justify-center items-center">
                <div className="card">
                <div className="card-header">
                <p className='py-2 px-4 text-gray-400'>Basic</p>
                    <h2 className='text-3xl font-semibold py-2 px-5 text-white'>$7.99</h2>
                    <p className='py-2 px-4 text-gray-400 font-normal'>Fully responsive 10 page website. <br /> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="card-body mt-0 py-2">
                    <ul className='py-4'>
                        <li><span className='text-gray-400'>5 pages</span></li>
                        <li><span className='text-gray-400'>Responsive design</span></li>
                        <li><span className='text-gray-400'>3rd party integrations</span></li>
                        <li><span className='text-gray-400'>24/7 support</span></li>
                        <li><span className='text-gray-400'>Free domain</span></li>
                        <li><span className='text-gray-400'>Free hosting</span></li>
                        <li><span className='text-gray-400'>Free SSL certificate</span></li>
                    </ul>
                    <button className="border-2 border-violet-700 rounded-lg hover:bg-violet-700 py-2 px-4 mt-4 text-white">Get Started</button>
                </div>
                </div>
                <div className="card">
                <div className="card-header">
                <p className='py-2 px-4 text-gray-400'>Standard</p>
                    <h2 className='text-3xl font-semibold py-2 px-5 text-white'>$100</h2>
                    <p className='py-2 px-4 text-gray-400 font-normal'>Fully responsive 10 page website. <br /> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="card-body mt-0 py-2">
                    <ul className='py-4'>
                        <li><span className='text-gray-400'>5 pages</span></li>
                        <li><span className='text-gray-400'>Responsive design</span></li>
                        <li><span className='text-gray-400'>3rd party integrations</span></li>
                        <li><span className='text-gray-400'>24/7 support</span></li>
                        <li><span className='text-gray-400'>Free domain</span></li>
                        <li><span className='text-gray-400'>Free hosting</span></li>
                        <li><span className='text-gray-400'>Free SSL certificate</span></li>
                    </ul>
                    <button className="border-2 border-violet-700 rounded-lg hover:bg-violet-700 py-2 px-4 mt-4 text-white">Get Started</button>
                </div>
                </div>
                <div className="card">
                <div className="card-header">
                <p className='py-2 px-4 text-gray-400'>Premium</p>
                    <h2 className='text-3xl font-semibold py-2 px-5 text-white'>$200</h2>
                    <p className='py-2 px-4 text-gray-400 font-normal'>Fully responsive 10 page website. <br /> Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="card-body mt-0 py-2">
                    <ul className='py-4'>
                        <li><span className='text-gray-400'>5 pages</span></li>
                        <li><span className='text-gray-400'>Responsive design</span></li>
                        <li><span className='text-gray-400'>3rd party integrations</span></li>
                        <li><span className='text-gray-400'>24/7 support</span></li>
                        <li><span className='text-gray-400'>Free domain</span></li>
                        <li><span className='text-gray-400'>Free hosting</span></li>
                        <li><span className='text-gray-400'>Free SSL certificate</span></li>
                    </ul>
                    <button className="border-2 border-violet-700 rounded-lg hover:bg-violet-700 py-2 px-4 mt-4 text-white">Get Started</button>
                </div>
                </div>
                </div>
        </div>
        </section>
        </div>
    )
}

export default PricingCards;