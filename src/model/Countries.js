import httpRequest from "../services/HttpServices";

export async function getCountries() {
    let countries =  await httpRequest('get', 'https://restcountries.com/v2/all')
    return countries.data
}

export async function getCountriesByName(countryName) {
    let countries =  await httpRequest('get', `https://restcountries.com/v2/name/${countryName.toLowerCase()}`)
    return countries.data
}

export async function getCountriesByRegion(countryRegion) {
    let countries =  await httpRequest('get', `https://restcountries.com/v2/region/${countryRegion.toLowerCase()}`)
    return countries.data
}
