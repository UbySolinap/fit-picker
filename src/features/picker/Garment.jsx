import Button from "../../ui/Button"
import GarmentType from "../../ui/GarmentType"
import { FaRegTrashAlt } from "react-icons/fa";


function Garment({ garment }) {

    const {image, timesWorn, subtype} = garment

    return (
        <div className="flex flex-col items-center border-color-light-brown border-2 rounded-lg mx-20 sm:mx-2 md:mx-3">
            <div className="h-72 md:h-80 justify-center items-center flex">
                <img src={image} alt="garment image" className="w-72 md:w-80"/>
            </div>
            <div className="px-1.5 xl:px-3 p-1 border-t w-full">
                <div className="flex-between">
                    <h2 className="italic text-neutral-400 text-sm md:text-base">Type:</h2>
                    <Button type="delete"><FaRegTrashAlt/></Button>
                </div>
                <div className="flex-between">
                    <div className="flex space-x-1">
                        {subtype.map((garmentType) => <GarmentType garmentType={garmentType} key={garmentType}/>) }
                    </div>
                </div>
                <div className="flex-between pt-2 pb-1">
                    <Button type="submit">Pick this!</Button>
                    <h1 className="italic text-xs text-neutral-400">{timesWorn}x worn</h1>
                </div>
            </div>
        </div>
    )
}

export default Garment
