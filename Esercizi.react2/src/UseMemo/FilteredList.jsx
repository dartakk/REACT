import React, { useMemo } from 'react';

const FilteredList = ({ data }) => {
  const filteredData = useMemo(() => {
    if (!data) return [];
    
    return data.filter(item => item.age > 18);
  }, [data]);

  return (
    <div>
      <h2>Filtered List</h2>
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>
            {item.name} (ID: {item.id}) - Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
