import "./App.css"
import React, { useEffect, useState } from 'react';
import Header from './componens/header';
import FilterTransfer from './componens/filterTransfer';
import FilterCheapFast from './componens/filterCheapFast';
import axios from 'axios';
import Card from './componens/Card';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState({
    all: true,
    noTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v2/prices/latest?currency=rub&period_type=year&page=1&limit=30&show_to_affiliates=true&sorting=price&trip_class=0&token=1662ebbbc7639b5c5efa22a72cbe5849');
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const applyFilters = () => {
    let filteredData = data;
    if (!selectedFilters.all) {
      filteredData = filteredData.filter(item => {
        if (selectedFilters.noTransfers && item.number_of_changes === 0) return true;
        if (selectedFilters.oneTransfer && item.number_of_changes === 1) return true;
        if (selectedFilters.twoTransfers && item.number_of_changes === 2) return true;
        if (selectedFilters.threeTransfers && item.number_of_changes === 3) return true;
        return false;
      });
    }
    return filteredData;
  };

  const handleFilterChange = (filter) => {
    setSelectedFilters(prevState => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };

  return (
    <div className="App">
      <Header />
      <div className='filterMain'>
        <FilterTransfer handleFilterChange={handleFilterChange} selectedFilters={selectedFilters} />
        <div>
          <FilterCheapFast />
          {loading ? (
            <div className='loading'>Loading...</div>
          ) : (
            <div className='card-container'>
              {applyFilters().map((item, index) => (
                <Card key={index} 
                  origin={item.origin}
                  destination={item.destination} 
                  distance={item.distance} 
                  depart_date={item.depart_date} 
                  return_date={item.return_date} 
                  value={item.value} 
                  gate={item.gate} 
                  number_of_changes={item.number_of_changes} 
                  trip_class={item.trip_class}/>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
