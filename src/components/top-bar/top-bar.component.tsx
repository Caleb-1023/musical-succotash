import { Link } from "react-router-dom"

const TopBar = () => {
  return (
    <div className="bg-white p-4 fixed top-0 left-0 w-screen">
        <h1 className="text-[#9A9A9A] text-l text-center uppercase font-medium">Image forgery detection and classification web application designed and implemented by <span className="text-[#606060]">Ajayi Emmanuel - <Link to={'/'} className="underline"> 18CJ024101</Link></span></h1>
    </div>
  )
}

export default TopBar