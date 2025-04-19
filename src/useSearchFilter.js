import { useState } from 'react';

const useSearchFilter = (data, key) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onFilter = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredData = data?.filter((item) =>
    item[key].toLowerCase().includes(searchTerm)
  );

  return {
    onFilter,
    filteredData,
  };
};

export default useSearchFilter;
