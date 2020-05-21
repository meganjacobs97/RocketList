import React from "react";
import { Link } from "react-router-dom";

function TopCat(props) {
  //sort categories 
  let sorted = props;
  sorted.list.sort(function(a,b){
    if(a.length > b.length) {
      return -1
    }
    else if(a.length > b.length) {
      return 1; 
    }
    return 0; 
  })
  

  return (
    <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
      <h1 className="text-center font-bold">{sorted.category}</h1>
      <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">

        {sorted.list ? (
          sorted.list.map((item) => (
            <Link className="text-RocketJessie" to={`/category/${item.id}`}>

              <li
                key={item.id}
                className="state-rendered-item"
                data-name={item.name}
                id={item.id}
              >
                {item.name}
              </li>
            </Link>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ol>
    </div>
  );
}

export default TopCat;
