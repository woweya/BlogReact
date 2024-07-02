import React from 'react';
import Atropos from 'atropos/react';
import 'atropos/css';
import '../App.css'; // File CSS per la personalizzazione degli stili

export default function App() {
  return (
    <div className='Atros-section w-full'>
       <div className="grid-background"></div>
       <div className="relative">
       <p className='text-xl tracking-[0.4rem] text-purple-400 font-semibold text-center absolute left-[38.3%]'>SERVICES</p>
       <h1 className='text-5xl font-semibold text-center py-10'>What you would get</h1>
       </div>
      <hr className='w-full mx-auto border-[#ffffff21]'/>
      <div className='max-w-screen-xl mx-auto pt-24 pb-16 px-4 md:px-8 lg:px-16'>
        <Atropos className="my-atropos" shadow={true}
          activeOffset={20}
          shadowScale={1}
          shadowOffset={20}
        >
          <div className="box-bg" data-atropos-offset="-5">
            <img className='box-img' src="src/assets/plain_purple_background_hd_purple-1920x1080.jpg" alt="Background" />
          </div>
          <div className="box-middle" data-atropos-offset="5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-40">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </div>
          <div className="box-front w-full" data-atropos-offset="5">
            <p className='text-center w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, nihil facere. Sit, reprehenderit omnis. Possimus, porro eligendi iure dolor velit ut quis sit fugit, recusandae corporis assumenda nemo fuga. Praesentium.</p>
          </div>
        </Atropos>
        <div className="flex justify-center items-center gap-10 mt-5 w-full">
          <Atropos className="second-atropos" shadow={true}
            activeOffset={20}
            shadowScale={1}
            shadowOffset={20}
          >
            <div className="box-bg" data-atropos-offset="-5">
              <img className='box-img' src="src/assets/plain_purple_background_hd_purple-1920x1080.jpg" alt="Background" />
            </div>
            <div className="box-middle left-[38%] top-[20%]" data-atropos-offset="5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-40">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
              </svg>

            </div>
            <div className="box-front w-full" data-atropos-offset="5">
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, nihil facere. Sit, reprehenderit omnis. Possimus, porro eligendi iure dolor velit ut quis sit fugit, recusandae corporis assumenda nemo fuga. Praesentium.</p>
            </div>
          </Atropos>
          <Atropos className="third-atropos"
            activeOffset={20}
            shadowScale={1}
            shadowOffset={20}
          >
            <div className="box-bg" data-atropos-offset="-5">
              <img className='box-img' src="src/assets/plain_purple_background_hd_purple-1920x1080.jpg" alt="Background" />
            </div>
            <div className="box-middle left-[38%] top-[20%]" data-atropos-offset="5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-40">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>

            </div>
            <div className="box-front w-full" data-atropos-offset="5">
              <p className='text-center py-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, nihil facere. Sit, reprehenderit omnis. Possimus, porro eligendi iure dolor velit ut quis sit fugit, recusandae corporis assumenda nemo fuga. Praesentium.</p>
            </div>
          </Atropos>
        </div>
      </div>
    </div>
  );
}
