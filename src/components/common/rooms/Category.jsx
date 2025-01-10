// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import myContext from "../../../context/myContext";

// const data = [
//   {
//     name: "All",
//     value:"",
//     image: "https://cdn-icons-png.flaticon.com/128/562/562460.png"
//   },
//   {
//     name: "1R",
//     value:"1r",
//     image: "https://cdn-icons-png.flaticon.com/128/578/578110.png"
//   },
//   {
//     name: "1RK",
//     value:"1rk",
//     image: "https://cdn-icons-png.flaticon.com/128/2341/2341111.png"
//   },
//   {
//     name: "1BHK",
//     value:"1bhk",
//     image: "https://cdn-icons-png.flaticon.com/128/1207/1207121.png"
//   },
//   {
//     name: "2BHK",
//     value:"2bhk",
//     image: "https://cdn-icons-png.flaticon.com/128/10365/10365088.png"
//   },
//   // {
//   //   name: "3BHK",
//   //   value:"3bhk",
//   //   image: "https://cdn-icons-png.flaticon.com/128/14321/14321298.png"
//   // }
// ];

// const Category = () => {
//   const navigate = useNavigate();
//   const context = useContext(myContext);
//   const { setRoomType } = context;  // Destructure setRoomType from context

//   return (
//     <div className="mt-4">
//       <div className="flex flex-wrap justify-center gap-x-4 gap-y-6">
//         {data.map((item, index) => (
//           <div key={index} className="px-4 max-w-[150px] lg:max-w-[200px]">
//             {/* Image */}
//             <button
//               className="w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-indigo-500 transition-all hover:bg-indigo-400 cursor-pointer mb-1"
//               onClick={() => {
//                 setRoomType(item.value); // Update the selected category in context
//                 // navigate(`/accoodation/${item.name}`);
//               }}
//             >
//               <LazyLoadImage
//                 className="rounded-full w-12 lg:w-24 h-10 lg:h-20"
//                 src={item.image}
//                 alt={item.name}
//                 effect="opacity"
//               />
//             </button>

//             {/* Name */}
//             <h1
//               className="text-sm lg:text-lg text-center fontPara font-medium title-font first-letter:uppercase"
             
//             >
//               {item.name}
//             </h1>
//           </div>
//         ))}
//       </div>

//       {/* Hide scrollbar */}
//       <style dangerouslySetInnerHTML={{
//         __html: ".hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none; } .hide-scroll-bar::-webkit-scrollbar { display: none; }"
//       }} />
//     </div>
//   );
// };

// export default Category;
