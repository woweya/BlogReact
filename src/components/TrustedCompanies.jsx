function Companies(){
    const companiesImages = {
        LuisVuitton: 'https://logo.clearbit.com/louisvuitton.com',
        Apple: 'https://logo.clearbit.com/apple.com',
        Amazon: 'https://logo.clearbit.com/amazon.com',
        Facebook: 'https://logo.clearbit.com/facebook.com',
        Google: 'https://logo.clearbit.com/google.com',
        Samsung: 'https://logo.clearbit.com/samsung.com',
        Microsoft: 'https://logo.clearbit.com/microsoft.com',
        Oracle: 'https://logo.clearbit.com/oracle.com',
    }
    

    return (
        <>
          <h1 className="text-gray-400">Trusted by 80+ businesses</h1>
          <ul className='flex justify-center items-center gap-10 mb-10'>
          {Object.keys(companiesImages).map((company, index) => (
              <li className="p-5 mt-5 flex justify-center hover:scale-105 hover:cursor-pointer hover:bg-purple-800 items-center border-[1px] w-full gap-2 border-purple-400 rounded-md" key={index}>
                <img className="h-[50px] min-w-[50px] rounded-md  cursor-pointer" src={companiesImages[company]} alt={company} />
                <p className="text-gray-400">{company}</p>
              </li>
            ))}
          </ul>
        </>
      );
    }

export default Companies