type ImageContextState = {
    forged: string;
    percentage: string;
    image: string | undefined;
    display: any
  };

const Result = ({forged, percentage, image, display}:ImageContextState) => {
    // console.log(localStorage.getItem('image'))

    // console.log(percentage)

  return (
    <div>
        <div className="w-screen h-screen relative rounded-md mx-auto p-20">
            {image ? <div className="flex flex-row items-center w-full h-full justify-center space-x-10">
                <div className="w-1/2">
                    <img src={image} alt="" className="w-3/4" />
                </div>
                <div className="w-1/2 flex flex-col text-4xl font-bold">
                    <p className="mb-10">This image is <span className="text-[#9A9A9A]">{forged}</span></p>
                    <p className="mb-10">Probability - <span className="text-[#9A9A9A]">{String(parseFloat(percentage) * 100)}</span></p>
                    {forged === 'Forged' ? <p className="mb-10">Forgery Class - <span className="text-[#9A9A9A]">Image splicing</span></p>
                    :
                    null}
                </div>
            </div>
            :
            <div className="relative flex animate-pulse flex-row items-center w-full h-full justify-center space-x-10">
                <div className="w-1/2 h-1/2 bg-gray-300 rounded-lg flex items-center justify-center">
                    <svg width="50px" height="50px" className="animate-spin mx-4" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><circle cx="7" cy="7" r="6" stroke="#000000" strokeOpacity=".1" strokeWidth="2"/><path fill="#3F50F3" fillOpacity="1" fillRule="nonzero" d="M7 0a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5V0z"/></g></svg>
                   <p className="text-4xl">Processing...</p>
                </div>
                <div className="w-1/2 h-1/2 flex flex-col space-y-6">
                    <div className="w-full h-1/4 bg-gray-300 rounded-lg ">
                    </div>
                    <div className="w-full h-1/4 bg-gray-300 rounded-lg ">
                    </div>
                </div>
            </div>}
        <svg width="40px" height="40px" onClick={display} className="absolute right-20 top-20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
        </div>
    </div>
  )
}

export default Result