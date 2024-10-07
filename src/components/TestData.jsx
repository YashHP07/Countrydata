import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Define the fetch function
const fetchTestData = async () => {
  const response = await fetch('https://freetestapi.com/api/v1/countries ');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};


const TestData = () => {
  // Updated useQuery syntax
  const { data, error, isLoading } = useQuery({
    queryKey: ['testData'],
    queryFn: fetchTestData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data)

  return (
    <div>
      <h1>Test Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default TestData;