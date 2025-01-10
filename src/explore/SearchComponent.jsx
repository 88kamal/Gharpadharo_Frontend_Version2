import React, { useState, useEffect, useContext } from "react";
import "./SearchComponent.css";


import { useGetLocalitiesQuery } from "../redux/slices/locationApiSlice";
import myContext from "../context/myContext";

const rolePaths = {
  2: '/admin-dashboard/admin-home-page',
  14: '/room-owner-dashboard/room-owner-home-page',
  15: '/user-dashboard/user-dashboard'
};

const SearchComponent = () => {
  const { localityId, setLocality } = useContext(myContext);
  const { data: localities, error: localitiesError, isLoading: isLocalitiesLoading } = useGetLocalitiesQuery();
  const [selectedCityName, setSelectedCityName] = useState("");
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [budget, setBudget] = useState("");
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [occupancy, setOccupancy] = useState("");
  const [showOccupancyDropdown, setShowOccupancyDropdown] = useState(false);

  const budgetOptions = [4000, 6000, 8000, 10000, 12000, 15000, 20000];
  const occupancyOptions = ["PG", "Hostel", "1-Room", "1-BHK", "2-BHK", "3-BHK"];

  useEffect(() => {
    if (localities && localities.length > 0) {
      setSelectedCityName(localities[0].localityName);
      setLocality(localities[0]._id);
    }
  }, [localities, setLocality]);

  const handleCitySelect = (e) => {
    const selectedOption = localities.find(
      (loc) => loc.localityName === e.target.value
    );
    if (selectedOption) {
      setSelectedCityName(selectedOption.localityName);
      setLocality(selectedOption._id);
      setShowLocationDropdown(false); // Close the dropdown after selection
    }
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-container')) {
      setShowLocationDropdown(false);
      setShowBudgetDropdown(false);
      setShowOccupancyDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleBudgetSelect = (option) => {
    setBudget(option);
    setShowBudgetDropdown(false);
  };

  const handleOccupancySelect = (option) => {
    setOccupancy(option);
    setShowOccupancyDropdown(false);
  };

  return (
    <div className="search-component">
      {/* Location Dropdown */}
      <div className="search-location">
        <span className="icon">📍</span>
        <div className="dropdown-container">
          <button
            className="dropdown-button"
            onClick={() => setShowLocationDropdown(!showLocationDropdown)}
          >
            {selectedCityName ? selectedCityName : "Select Location ▼"}
          </button>
          {showLocationDropdown && (
            <ul className="dropdown-menu">
              {localities && localities.map((option, index) => (
                <li
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleCitySelect({ target: { value: option.localityName } })}
                >
                  {option.localityName}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="divider"></div>

      {/* Occupancy Dropdown */}
      <div className="search-occupancy">
        <span className="icon">🏠</span>
        <div className="dropdown-container">
          <button
            className="dropdown-button"
            onClick={() => setShowOccupancyDropdown(!showOccupancyDropdown)}
          >
            {occupancy ? occupancy : "Occupancy Type ▼"}
          </button>
          {showOccupancyDropdown && (
            <ul className="dropdown-menu">
              {occupancyOptions.map((option, index) => (
                <li
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleOccupancySelect(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="divider"></div>

      {/* Budget Dropdown */}
      <div className="search-budget">
        <span className="icon">₹</span>
        <div className="dropdown-container">
          <button
            className="dropdown-button"
            onClick={() => setShowBudgetDropdown(!showBudgetDropdown)}
          >
            {budget ? `₹${budget}` : "Budget ▼"}
          </button>
          {showBudgetDropdown && (
            <ul className="dropdown-menu">
              {budgetOptions.map((option, index) => (
                <li
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleBudgetSelect(option)}
                >
                  ₹{option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Search Button */}
      <button className="search-button">
        <span className="icon">🔍</span> Search
      </button>
    </div>
  );
};

export default SearchComponent;

// import React, { useState, useEffect, useContext } from "react";
// import "./SearchComponent.css";

// import { useGetLocalitiesQuery } from "../redux/slices/locationApiSlice";
// import myContext from "../context/myContext";

// const SearchComponent = () => {
//   const { setLocality } = useContext(myContext);
//   const { data: localities, error: localitiesError, isLoading: isLocalitiesLoading } = useGetLocalitiesQuery();
//   const [selectedCityName, setSelectedCityName] = useState("");
//   const [localityId, setLocalityId] = useState("");
//   const [showLocationDropdown, setShowLocationDropdown] = useState(false);
//   const [budget, setBudget] = useState("");
//   const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
//   const [occupancy, setOccupancy] = useState("");
//   const [showOccupancyDropdown, setShowOccupancyDropdown] = useState(false);

//   const budgetOptions = [4000, 6000, 8000, 10000, 12000, 15000, 20000];
//   const occupancyOptions = ["PG", "Hostel", "1-Room", "1-BHK", "2-BHK", "3-BHK"];

//   useEffect(() => {
//     if (localities && localities.length > 0) {
//       setSelectedCityName(localities[0].localityName);
//       setLocalityId(localities[0]._id);
//     }
//   }, [localities]);

//   const handleCitySelect = (selectedOption) => {
//     setSelectedCityName(selectedOption.localityName);
//     setLocalityId(selectedOption._id);
//     setShowLocationDropdown(false);
//   };

//   const handleSearch = () => {
//     // Perform search or pass the selected filters to the parent component
//     console.log("Search Filters:");
//     console.log("Locality ID:", localityId);
//     console.log("Occupancy:", occupancy);
//     console.log("Budget:", budget);

//     // Trigger search logic here (e.g., update parent state or call an API)
//     setLocality(localityId);
//   };

//   return (
//     <div className="search-component">
//       {/* Location Dropdown */}
//       <div className="search-location">
//         <span className="icon">📍</span>
//         <div className="dropdown-container">
//           <button
//             className="dropdown-button"
//             onClick={() => setShowLocationDropdown(!showLocationDropdown)}
//           >
//             {selectedCityName ? selectedCityName : "Select Location ▼"}
//           </button>
//           {showLocationDropdown && (
//             <ul className="dropdown-menu">
//               {localities && localities.map((option) => (
//                 <li
//                   key={option._id}
//                   className="dropdown-item"
//                   onClick={() => handleCitySelect(option)}
//                 >
//                   {option.localityName}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       <div className="divider"></div>

//       {/* Occupancy Dropdown */}
//       <div className="search-occupancy">
//         <span className="icon">🏠</span>
//         <div className="dropdown-container">
//           <button
//             className="dropdown-button"
//             onClick={() => setShowOccupancyDropdown(!showOccupancyDropdown)}
//           >
//             {occupancy ? occupancy : "Occupancy Type ▼"}
//           </button>
//           {showOccupancyDropdown && (
//             <ul className="dropdown-menu">
//               {occupancyOptions.map((option, index) => (
//                 <li
//                   key={index}
//                   className="dropdown-item"
//                   onClick={() => {
//                     setOccupancy(option);
//                     setShowOccupancyDropdown(false);
//                   }}
//                 >
//                   {option}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       <div className="divider"></div>

//       {/* Budget Dropdown */}
//       <div className="search-budget">
//         <span className="icon">₹</span>
//         <div className="dropdown-container">
//           <button
//             className="dropdown-button"
//             onClick={() => setShowBudgetDropdown(!showBudgetDropdown)}
//           >
//             {budget ? `₹${budget}` : "Budget ▼"}
//           </button>
//           {showBudgetDropdown && (
//             <ul className="dropdown-menu">
//               {budgetOptions.map((option, index) => (
//                 <li
//                   key={index}
//                   className="dropdown-item"
//                   onClick={() => {
//                     setBudget(option);
//                     setShowBudgetDropdown(false);
//                   }}
//                 >
//                   ₹{option}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       {/* Search Button */}
//       <button className="search-button" onClick={handleSearch}>
//         <span className="icon">🔍</span> Search
//       </button>
//     </div>
//   );
// };

// export default SearchComponent;
