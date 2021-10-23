import React, {useEffect, useState} from 'react';


import Loading from '../partials/Loading/Loading'
import { Search } from '../partials/Search/Search';
import './Home.css';

// home (main) component for displaying search input and candidate cards

export const Home = ({setToken, token}) =>{
    const [users, setUsers] = useState([])
    const [showLoading, setShowLoading] = useState(false);
    const [search, setSearch] = useState('');    
  
  useEffect(() => {
    if (token === '') {                                         // 'loading' animation until token is received
      setShowLoading(true)      
    }
    else {                        
      setShowLoading(false)                                       // fetching user data when token is received
      
    }      
  },[token, setToken])

  const renderLoading = () => {           // helper function for loading animation
    return <Loading />
  }

  return showLoading ? renderLoading() : renderLoading();
}