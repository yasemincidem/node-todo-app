import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Todos = function () {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/todos')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        throw error;
      });
  }, []);
  return data?.map((item) => <div key={item._id}>{item.todo}</div>) || <div>No matches todo</div>;
};

export default Todos;
