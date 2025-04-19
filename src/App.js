import React from 'react';
import useFetchApi from './useFetchApi';
import useSearchFilter from './useSearchFilter';
import './style.css';

export default function App() {
  const { data, isLoading, error } = useFetchApi(
    'https://jsonplaceholder.typicode.com/users'
  );

  const { onFilter, filteredData } = useSearchFilter(data, 'email');

  if (isLoading) {
    return 'Loading...';
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div>
      <div>
        <input placeholder="Search" onChange={onFilter} />
      </div>
      {!filteredData || filteredData.length === 0 ? (
        <p>No data found!</p>
      ) : (
        <ul>
          {filteredData?.map((user) => (
            <li key={user.id} className="users">
              {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
