import React from "react"

const Greeting = ({ name, age }) => {
  return (
    <>
      <h1>Tere: { name }</h1>
      <p>vanus: { age }</p>
    </>
  )
}

export default Greeting