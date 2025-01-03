import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import myContext from "../../../context/myContext";

const data = [
  {
    name: "All",
    value:"",
    image: "https://i.pinimg.com/736x/bf/ef/6a/bfef6ac73d1eab0d4072f3a2c69aa9da.jpg"
  },
  {
    name: "PG",
    value:"1r",
    image: "https://i.pinimg.com/736x/17/46/00/17460046cb5b0784511ae6609e79a864.jpg"
  },
  {
    name: "Hostel",
    value:"1rk",
    image: "https://i.pinimg.com/736x/15/81/49/158149aca0cf2e2eaa75c5cf3b623c55.jpg"
  },
  {
    name: "Flats",
    value:"1bhk",
    image: "https://i.pinimg.com/736x/80/c5/44/80c54460304c94a781de1d63db97bdb3.jpg"
  },
  {
    name: "2BHK",
    value:"2bhk",
    image: "https://i.pinimg.com/736x/fd/32/08/fd3208c4ea748dabb6d9d0eaf26514d1.jpg"
  },
  {
    name: "3BHK",
    value:"3bhk",
    image: "https://i.pinimg.com/736x/76/4c/f8/764cf8eee4c471f1d5042b62aed0ecc7.jpg"
  }
];

const Category = () => {
  const navigate = useNavigate();
  const context = useContext(myContext);
  const { setRoomType } = context;  // Destructure setRoomType from context

  return (
    <div className="mt-4">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-6">
        {data.map((item, index) => (
          <div key={index} className="px-4 max-w-[150px] lg:max-w-[200px]">
            {/* Image */}
            <button
              className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-indigo-500 transition-all hover:bg-indigo-400 cursor-pointer mb-1"
              onClick={() => {
                setRoomType(item.value); // Update the selected category in context
                // navigate(`/accoodation/${item.name}`);
              }}
            >
              <LazyLoadImage
                className="rounded-full w-12 lg:w-24 h-10 lg:h-24"
                src={item.image}
                alt={item.name}
                effect="opacity"
              />
            </button>

            {/* Name */}
            <h1
              className="text-sm lg:text-lg text-center fontPara font-medium title-font first-letter:uppercase"
             
            >
              {item.name}
            </h1>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: ".hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none; } .hide-scroll-bar::-webkit-scrollbar { display: none; }"
      }} />
    </div>
  );
};

export default Category;
