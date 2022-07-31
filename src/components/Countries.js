import CountryInfo from "./CountryInfo";

const Countries = ({countries, setQuery}) => {
    const numberOfCountries = countries.length

    if (numberOfCountries === 1) {
        return (
            <CountryInfo country={countries[0]}/>
        )
    }
    else if (numberOfCountries < 11) {
        return (
            <div>
                {countries.map(country => <p key={country.name.common}>{country.name.common} <button onClick={() => setQuery(country.name.official)}>Show</button></p>)}
            </div>
        )
    }
    else {
        return (
            <div>
                <p>too many countries, narrow your search</p>
            </div>
        )
    }
}

export default Countries;