import { createContext, useState } from "react";

export const myContext = createContext();

function SendingContext({ children }) {
//   const [singin, setSignin] = useState(false);
  const [ApiData, SetApiData] = useState([]);
  const [getData, SetGetData] = useState([]);
  const [SearchApi, setSearchApi] = useState([]);
  const [Email,SetEmail]=useState('')
  const [Password,SetPassword]=useState('')
  const [login, setlogin] = useState(false);

  const [search,setSearch]=useState('')
    const [Rated,SetRated]=useState([])
    const[Popular,SetPopular]=useState([])
  

  return (
    <myContext.Provider value={{search,setSearch,SetRated,Rated,Popular,SetPopular, login, setlogin,Email,SetEmail,Password,SetPassword,ApiData, SetApiData,getData,SetGetData,SearchApi,setSearchApi }}>
      {children}
    </myContext.Provider>
  );
}
export default SendingContext;