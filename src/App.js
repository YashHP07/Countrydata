// import React from 'react'
// import "./App.css"
// import TestData from './components/TestData'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import ShowApp from './components/Dummy';
// import CountryTable from './components/CountryTable';
// // import TestData from './components/TestData'

// function App() {
//   const queryClient=new QueryClient();
//   return (
//     <QueryClientProvider client={queryClient}>
//     <div className="main">
//     <div className='mid-content'>
//       <h1>I am testing for dummy Apis data</h1>
//       {/* <TestData/> */}
//       {/* <ShowApp/> */}
//       <CountryTable/>
//     </div>
//     </div>
//     </QueryClientProvider>
//   )
// }

// export default App

import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CountryTable from './components/CountryTable';

function App() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="main">
        <div className="mid-content">
          <h1>Some Data From Dummy-Country-Api</h1>
          <CountryTable />
        </div>
      </div>
    </QueryClientProvider>
  );
}
export default App;





