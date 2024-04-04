import React from "react"

 const Heading = ({ title }) => {
  return (
    <>
      <h2 className='heading' data-aos='zoom-in-down'>
        {title}
      </h2>
    </>
  )
}
export default Heading