/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";
import { Eye, X } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// eslint-disable-next-line no-unused-vars
export default function ViewaccomodationOwnerDetailModal(accomodation) {
  const [open, setOpen] = useState(false);
  const [dialogSize, setDialogSize] = useState("lg");

  const{ accomodationImage, accomodationType, accomodationName, ownerName, ownerEmail, ownerPhoneNumber, gender,selectArea} = accomodation

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth < 768) {
            setDialogSize("xxl"); // Adjust size for mobile
        } else {
            setDialogSize("xl"); // Adjust size for desktop
        }
    };

    window.addEventListener("resize", handleResize);

    // Call resize function initially to set the right size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
}, [])
  return (
    <>
      <IconButton
        onClick={handleOpen}
        variant="text"
        className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
      >
        <Eye className="h-4 w-4" />
      </IconButton>

      <Dialog open={open} size={dialogSize} className="shadow-none hover:shadow-none rounded-none bg-indigo-100 overflow-y-scroll">
        <div className="px-4 py-4">
          {/* <pre>{JSON.stringify(accomodation, null, 2)}</pre> */}
          <h1 className="text-xl text-black font-bold">Accomodation Owner Detail</h1>
          <div className="absolute top-0 right-0 py-1.5 px-1.5 bg-indigo-200 cursor-pointer" onClick={handleOpen}>
            <X size={20} className="text-indigo-800 hover:text-indigo-900" />
          </div>
        </div>
        <DialogBody>
          <div className="mb-8">
            <div className="flex justify-center items-center mb-1">
              <LazyLoadImage
                alt={"img"}
                src={accomodationImage?.url}
                className=" w-28 h-28 rounded-full shadow-md border border-indigo-200"
                effect="opacity"
                wrapperProps={{
                  // If you need to, you can tweak the effect transition using the wrapper style.
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center">
            <div className=" bg-indigo-50 border border-indigo-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Accomodation Name : </span> <span className=" app-font">{accomodationName}</span>
            </div>

            <div className=" bg-indigo-50 border border-indigo-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Owner Name : </span> <span className=" app-font">{ownerName}</span>
            </div>

          </div>

          <div className="flex flex-wrap justify-between items-center">
            <div className=" bg-indigo-50 border border-indigo-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Email : </span> <span className=" app-font">{ownerEmail}</span>
            </div>

            <div className=" bg-indigo-50 border border-indigo-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Mobile Number : </span> <span className=" app-font">{ownerPhoneNumber}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center">
            <div className=" bg-indigo-50 border border-indigo-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Gender : </span> <span className=" app-font capitalize">{gender}</span>
            </div>

            <div className=" bg-indigo-50 border border-indigo-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Locality : </span> <span className=" app-font capitalize">{selectArea?.localityName}</span>
            </div>

          </div>

          <div className="flex flex-wrap justify-between items-center">
            <div className=" bg-indigo-50 border border-indigo-200 text-black py-2 px-2 mb-2 w-full sm:w-full md:w-full lg:w-1/2">
              <span className=" font-bold">Accomodation Type: : </span> <span className=" app-font capitalize">{accomodationType}</span>
            </div>
          </div>

        </DialogBody>
      </Dialog>
    </>
  );
}