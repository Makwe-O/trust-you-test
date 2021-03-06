import React from 'react';
import { Link } from 'react-router-dom';
const Table = ({ title, data, question }) => {
  return (
    <table>
      <thead>
        <tr>
          {title.map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          Object.keys(data)?.map((item, index) => (
            <tr key={item}>
              <td>
                <Link to={`reviews/${question}/${item}`}>{item}</Link>
              </td>
              <td>
                <Link to={`reviews/${question}/${item}`}>
                  {Object.values(data)[index]}
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
