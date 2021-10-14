import React from "react"

const TestComponent = ({ number, show2, setShow2  }) => {

  return (
    <>
      <h6>test number: { number*54 }</h6>
      <button onClick={() => setShow2(!show2)}>Näita muud</button>
    </>
  )
}

export default TestComponent