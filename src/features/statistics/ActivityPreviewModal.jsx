import { format } from "date-fns";
import { useState } from "react";
import { useUpdateFit } from "./useUpdateFit";

import { RiTShirtFill, RiTShirtLine } from "react-icons/ri";

import ModalHeader from "../../ui/ModalHeader";
import SelectedImages from "../../ui/SelectedImages";
import ImageAdd from "../../ui/ImageAdd";
import Button from "../../ui/Button";
import ActivityStatus from "../../ui/ActivityStatus";

function ActivityPreviewModal({ data, onCloseModal }) {
  const { id, date, clothesImages, fitImage, status } = data;

  const [image, setImage] = useState("");
  const { updateFit, isUpdating } = useUpdateFit();
  console.log(fitImage);

  const formattedDate = format(new Date(date.slice(0, 10)), "MM/dd/yyyy");

  function handleImage(e) {
    // This will create a URL that will pertain on the uploaded image
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  function handleUpdate() {
    if (!image) return;
    console.log(image);

    updateFit(
      { id, fitImage: image },
      {
        onSuccess: () => {
          onCloseModal?.();
        },
      },
    );
  }

  return (
    <div className="px-6 py-5 text-sm md:text-base">
      <ModalHeader>Activity preview</ModalHeader>
      <div className="md:flex">
        <div className="w-80 text-color-dark-blue md:w-96">
          <p className="font-bold">
            Activity date:
            <span className="ml-1 text-color-light-brown">{formattedDate}</span>
          </p>

          <div className="my-2 flex items-center">
            <p className="mr-1 font-bold">Status: </p>
            <ActivityStatus status={status} />
          </div>

          <SelectedImages items={clothesImages} type="preview" />
        </div>
        {status === "Picked" && (
          <div className="mt-5 border-t border-color-dark-blue md:mt-0 md:border-none">
            <ImageAdd onChange={handleImage} type="own-fit" />

            <div className="mb-2 flex items-center text-base font-bold text-color-dark-blue">
              {fitImage && !image && (
                <>
                  <RiTShirtFill className="mr-1" />
                  <h1>Existing fit:</h1>
                </>
              )}

              {image && (
                <>
                  <RiTShirtLine className="mr-1" />
                  <h1>New fit:</h1>
                </>
              )}
            </div>

            <div className="flex justify-center">
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : fitImage
                      ? fitImage
                      : "./placeholder-img.png"
                }
                alt="fit image"
                className="h-64 w-64 object-contain md:h-72 md:w-72 lg:h-80 lg:w-80"
              />
            </div>
            {image && (
              <div className="mt-2 flex justify-center">
                <Button
                  type="addFit"
                  disabled={isUpdating}
                  onClick={handleUpdate}
                >
                  Add Fit
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ActivityPreviewModal;
