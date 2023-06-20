import React from 'react';

export const DataContext = React.createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = React.useState(null);
  
    const setDataAndNext = (newData) => {
      setData({newData})
    };
  
    return (
      <DataContext.Provider value={{ data, setDataAndNext }}>
        {children}
      </DataContext.Provider>
    );
  };

export default DataProvider;
