
const Footer = () => {

    return (
            <footer className="w-full flex text-center justify-center items-center bg-[#161616] py-5">
           <div className="container mx-auto flex justify-around items-center">
           <div className="left-footer text-start" style={{width: "50%;", height: "100%", float: "left"}}>
                <h1>Logo</h1>
                <p className="text-gray-400 font-normal">Copyright © 2022. All rights reserved.</p>
            </div>
            <div className="right-footer" style={{width: "50%", height: "100%", float: "right"}}>
                <h1>Let's connect</h1>
                <div className="w-1/2 border-2 border-blue-500 mx-auto">
                <ul className="border-2 border-blue-500">
                    <li className="text-gray-400 font-normal">Twitter</li>
                    <li className="text-gray-400 font-normal">Facebook</li>
                    <li className="text-gray-400 font-normal">Instagram</li>
                    <li className="text-gray-400 font-normal">LinkedIn</li>
                </ul>
                </div>
            </div>
            </div> 
        </footer>
    )
}

export default Footer;