import { useState } from "react";
import axios from "axios";
import { FileUploader } from "react-drag-drop-files";
import Result from "../result/result.component";

const fileTypes = ["JPG", "PNG", "GIF","JPEG","TIF"];

const Upload = () => {
    const [showResult, setShowResult] = useState(false)
    const [file, setFile] = useState<string>();
    const [percentage, setPercentage] = useState<string>('')
    const [forged, setForged] = useState<string>('')

    const handleChange = async (file:any) => {
        setFile('')
        // console.log(file)
        setShowResult(true)
        const formData = new FormData()
        formData.append('image', file)
        const response = await axios.post("https://fore.serveo.net/predict", formData ,{
            headers: {
              'Content-Type': 'multipart/form-data',
              "Access-Control-Allow-Origin": "*" ,
              "Access-Control-Allow-Methods" : "GET, OPTIONS, POST, PUT"
            }})
            // const response = await axios.get('165.232.123.217:8000/all_users')
            // console.log(response.data)
        setFile(URL.createObjectURL(file));
        setForged(response.data.class)
        setPercentage(response.data.percetage)
        console.log(response)
    };

    const closeResult = () => {
        setShowResult(false)
    }

  return (
    <div className="w-screen h-screen">
        {showResult ? <Result forged={forged} percentage={percentage} image={file} display={closeResult} />
        :
        <div className="h-full flex flex-col items-center justify-center text-center">
            <h1 className="font-bold text-[42px]">Upload an image to detect Forgery</h1>
            <h4 className="secondary-text text-[#929292] text-l font-medium my-10">NB: This application only classifies copy-move forgery <br/>and image splitting forgery</h4>
            <div className="px-24 py-20 rounded-xl shadow-2xl">
                <FileUploader
                    multiple={false}
                    handleChange={handleChange}
                    name="image"
                    types={fileTypes}
                >
                    <button className="bg-[#3838F3] hover:bg-[#000088] py-7 px-10 mb-8 flex items-center justify-center text-3xl font-bold text-white rounded-[20px]">
                        <svg className="me-4" width="50" height="47" viewBox="0 0 50 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.875 25.125H28.125V12.625H37.5L25 0.125L12.5 12.625H21.875V25.125ZM31.25 18.0938V22.9125L45.5594 28.25L25 35.9156L4.44063 28.25L18.75 22.9125V18.0938L0 25.125V37.625L25 47L50 37.625V25.125L31.25 18.0938Z" fill="white"/></svg>
                        Upload Image
                    </button>
                    <p className="text-[#606060] text-2xl font-medium">or drop a file</p>
                </FileUploader>
            </div>
        </div>}
    </div>
  )
}

export default Upload