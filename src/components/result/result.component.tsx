type ImageContextState = {
    forged: string;
    percentage: string;
    image: string | undefined;
  };

const Result = ({forged, percentage, image}:ImageContextState) => {
    // console.log(localStorage.getItem('image'))

    // console.log(percentage)

  return (
    <div>
        <div className="w-screen h-screen rounded-md mx-auto p-20">
            {image ? <div className="flex flex-row items-center w-full h-full justify-center space-x-10">
                <div className="w-1/2">
                    <img src={image} alt="" className="w-3/4" />
                </div>
                <div className="w-1/2 flex flex-col text-5xl font-bold">
                    <p className="mb-10">This image is <span className="text-[#9A9A9A]">{forged}</span></p>
                    <p className="mb-10">Probability of Image Forged - <span className="text-[#9A9A9A]">{String(parseFloat(percentage) * 100)}</span></p>
                    <p className="mb-10">Type - <span className="text-[#9A9A9A]">Image splicing</span></p>
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
        </div>
    </div>
  )
}

export default Result