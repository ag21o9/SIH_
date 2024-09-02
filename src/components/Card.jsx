import React from 'react'

const Card = ({ title, items }) => {
    return (
      <div className="bg-white shadow-xl rounded-lg p-6 overflow-y-auto h-3/5 w-full transition transform hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
        <ul className="list-disc list-inside space-y-2">
          {items.map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-600" onClick={() => alert(`Redirecting to full content of: ${item}`)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Card
