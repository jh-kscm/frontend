import React, { useState } from 'react';
import axios from 'axios';

function FrontendOne() {
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/one');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Frontend One</h1>
      <button onClick={fetchData}>Fetch Data from Backend</button>
      {data && <p>Response: {data}</p>}
    </div>
  );
}

export default FrontendOne;
