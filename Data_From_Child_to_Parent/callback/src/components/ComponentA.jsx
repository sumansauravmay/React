import React, { useState } from 'react';
import ComponentB from './ComponentB';

function ComponentA() {
  const [receivedData, setReceivedData] = useState([]);


  const handleDataFromChild = (data) => {
    setReceivedData(data);
  };

  return (
    <div>
      <h1>Parent Component (A)</h1>
      <ComponentB sendDataToParent={handleDataFromChild} />
      
      <h2>Data from Child:</h2>
      {receivedData.length > 0 ? (
        receivedData.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))
      ) : (
        <p>No data received yet</p>
      )}
    </div>
  );
}

export default ComponentA;
