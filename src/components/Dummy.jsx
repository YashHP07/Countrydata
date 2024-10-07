

import { useQuery } from '@tanstack/react-query';
import React from 'react';

const fetchApp = async () => {
  const result = await fetch('https://freetestapi.com/api/v1/countries');
  if (!result.ok) {
    throw new Error('Network response was not ok');
  }
  return result.json();
};

const ShowApp = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['app'],
    queryFn: fetchApp,
  });

  if (isLoading) return <>Loading....</>;
  if (error) return <>Error: {error.message}</>;

  // Assuming data is an array of country objects
  return (
    <>
      <h1>Showing Countries</h1>
      <ul>
        {data.map((country) => (
          <li key={country.id}>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowApp;
