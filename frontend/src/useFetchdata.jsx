import { useEffect, useState } from 'react';


function useFetchData(url) {
    const [data, setData] = useState();
  
    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(setData)
        .catch(console.error);
    }, [url]);
  
    return data;
  }

export default useFetchData;