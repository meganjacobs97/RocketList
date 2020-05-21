import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

export default function queryForSubCatsByParentId(id) {
  const query = `gql
  {
    category(id: "${id}") {
      name
      _id
      subcategories {
        name
        _id
      }
    }
  }`;

  // return useQuery(query)
  // const [subCategories, setSubCategories] = useState({
  //   parentCategory: "",
  //   currCategory: "",
  //   subCategories: [],
  // });
}

function Dogs({ onDogSelected }) {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog" onChange={onDogSelected}>
      {data.dogs.map((dog) => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}

// export default {
//   searchTerms: function(query) {
//     return axios.get(
//       "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
//         query +
//         "&limit=1&format=json&origin=*"
//     );
//   }
// };
