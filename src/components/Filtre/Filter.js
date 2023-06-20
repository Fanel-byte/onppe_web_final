import React from 'react';

export function Filter({ options, selected, setSelected }) {
  const handleSelectChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="w-full py-6 lg:py-8">
      <div className="relative w-full max-w-md px-4 mx-auto">
        <div className="relative mt-1">
          <select
            id="filter"
            name="filter"
            value={selected}
            onChange={handleSelectChange}
            className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md text-right appearance-none"
          >
            {options.map((opt) => (
              <option
                key={opt.val}
                value={opt.val}
              >
                {opt.val}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
