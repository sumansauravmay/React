import React from 'react'

const NameData = ({name}) => {
    console.log("name")
  return (
    <h1>
      My name is {name}
    </h1>
  )
}

export default React.memo(NameData);
