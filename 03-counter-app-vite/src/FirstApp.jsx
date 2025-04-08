import PropTypes from 'prop-types'

 
export const FirstApp = ({title, subTitle, name}) => {


    
    
  return (
    <>
      <h1>{title}</h1>
      {/* <h1>{getResult(1 , 5)} </h1> */}
      {/* <code>{JSON.stringify(name)}</code> */}
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
    title: 'hola soy goku',
    subTitle: 'esto es sub',
    name:'no hay name '
}
