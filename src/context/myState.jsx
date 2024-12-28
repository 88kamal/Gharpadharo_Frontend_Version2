/* eslint-disable react/prop-types */
import { useState } from 'react';
import MyContext from './myContext';

function MyState(props) {
  const [localityId, setLocality] = useState(null);  // Replace with actual latitude
  const [roomType, setRoomType] = useState("");   // Add category to context

  return (
    <MyContext.Provider value={{
      localityId, setLocality,
      roomType, setRoomType  // Provide category and its setter
    }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
