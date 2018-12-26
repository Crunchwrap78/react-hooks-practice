import React, { useEffect } from 'react';
import axios from 'axios';

export default function App() {
  useEffect(async () => {
    const response = await axios.get('http://hn.algolia.com/api/v1/search?=reacthooks')
    console.log(response);
  });
  return (
    <div>App</div>
  );
}


