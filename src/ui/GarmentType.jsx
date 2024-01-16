function GarmentType({ garmentType }) {
    return (
        <div className="border hover:scale-110 duration-100 py-1 px-2 rounded-md font-semibold text-white bg-color-dark-blue italic text-xs md:text-base">
            <p>{garmentType}</p>
        </div>
    )
}

export default GarmentType
