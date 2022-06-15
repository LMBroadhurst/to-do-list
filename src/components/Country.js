const Country = ( {country, handleClick}) => {

  return (
    <>
        <p onClick={ () => handleClick(country) }>{country.name.common} {country.flag}</p>
        <span>The capital of {country.name.common} is {country.capital}</span>
    </>
  )

}

export default Country