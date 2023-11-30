import {useState, useEffect} from 'react'
import axios from 'axios'

const FetchData = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const {data:response} = await axios.get('http://localhost:3000/users');
        setData(response);
      }catch(error){
        console.error(error)
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return{
    data, 
    loading,
  };
};

export default FetchData;