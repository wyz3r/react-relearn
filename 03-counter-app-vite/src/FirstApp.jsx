import React from 'react'; // Necesario si usas JSX

import PropTypes from 'prop-types'

 
export const FirstApp = ({title, subTitle, name}) => {


    
    
  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      {/* <h1>{getResult(1 , 5)} </h1> */}
      {/* <code>{JSON.stringify(name)}</code> */}
      <p> {subTitle}</p>
      <p> {subTitle}</p>
      
      <p> {name}</p>


    </>
  );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    
}

FirstApp.defaultProps = {
    
    subTitle: 'esto es sub',
    name:'no hay name '
}
