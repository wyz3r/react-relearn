
export const ShowIncrement = ({increment}) => {
    console.log('me volvi a generar ')
  return (
    <button 
    onClick={() => {
        increment()
    }}
    className='btn btn-primary'
    >
        Increment
    </button>
  )
}
