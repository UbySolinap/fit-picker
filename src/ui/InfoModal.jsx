import { format } from "date-fns";

function InfoModal({ garment }) {
  const dateAdded = garment.dateAdded.slice(0, 10);

  const formattedDate = format(new Date(dateAdded), "MMM dd, yyyy");

  return (
    <div className="px-5 py-5 text-sm md:text-base ">
      <h1 className="border-b border-color-dark-blue text-lg font-bold italic text-color-dark-blue">
        Information
      </h1>
      <div className="mt-2 flex font-bold text-color-dark-blue">
        <div className="mr-10">
          <p>Date added: </p>
          <span className="pl-1 font-semibold italic text-color-light-brown">
            {formattedDate}
          </span>

          <p className="mt-2">Times worn:</p>
          {garment.timesWorn === 0 ? (
            <span className="pl-1 font-semibold italic text-color-light-gray">
              Not yet worn
            </span>
          ) : (
            <span className="pl-1 font-semibold italic text-color-light-brown">
              {garment.timesWorn}x
            </span>
          )}
        </div>

        <div className="">
          <p>Last worn:</p>
          {garment.lastWorn === null ? (
            <span className="pl-1 font-semibold italic text-color-light-gray">
              Not yet worn
            </span>
          ) : (
            <span className="pl-1 font-semibold italic text-color-light-brown">
              {garment.lastWorn}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
