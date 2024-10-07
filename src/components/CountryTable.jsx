import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import '../App.css';

const fetchCountries = async () => {
  const { data } = await axios.get('https://freetestapi.com/api/v1/countries');
  return data;
};

const CountryTable = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Number of items to display per page

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error fetching data</p>;
  }

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data to get the items for the current page
  const paginatedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Population</th>
            <th>Density</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((country) => (
            <tr key={country.name}>
              <td>{country.name}</td>
              <td>{country.population}</td>
              <td>{country.density}</td>
              <td>{country.capital}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage===1}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CountryTable;