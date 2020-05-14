import React from 'react'

export default function Subcategory(props) {
  const Subcategories = props.name
  return (
    <div className="container rounded border-2 border-RocketRed divide-y-2 divide-RocketSteel">
      <h1 className="text-center">
        Subcategories in {props.parent_category}
      </h1>
      <ol className="list-decimal list-inside ml-4 mr-4 mb-1 text-center">
        <li>{Subcategories}</li>
      </ol>
    </div>
  )
}
