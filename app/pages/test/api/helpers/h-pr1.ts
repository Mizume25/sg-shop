/**
 * Helper para la Practica 1
 */
import countries from 'i18n-iso-countries'
import es from 'i18n-iso-countries/langs/es.json'
import { getCountries, getCountryCallingCode } from 'libphonenumber-js'




/** Tipos de licencias */
export const drivingLicenseTypes = ['AM', 'A1', 'A2', 'A', 'B', 'C1', 'C', 'D1', 'D', 'BE', 'CE']

/** Funciones */

/**
 * Funcion que devuelve nombre
 * @param code 
 * @returns 
 */
export const getCountryName = (code: string) => {
    return new Intl.DisplayNames(['es'], { type: 'region' }).of(code)
}

/**
 * 
 * Funcion que retorna codigo a aprtir de un nombre
 */

export const getCountryCode = (name: string): string => {
  const names = new Intl.DisplayNames(['es'], { type: 'region' })
  return getCountryCodes().find(code => names.of(code) === name)!
}

/**
 * 
 * Obtener todos los codigos 
 */
export const getCountryCodes = (): string[] => {
  countries.registerLocale(es)
  return Object.keys(countries.getNames('es'))
}

/**
 * 
 * Obtener TODOS lso nomrbes de Paises
 * 
 */

export const getCountriesNames = (): string[] => {
  countries.registerLocale(es)
  return Object.values(countries.getNames('es'))
}


/**
 * 
 * Obtener todos lo numeros relacionados con paises
 * 
 */

export const getPhoneCodes = (): string[] => {
  return getCountries().map(code => `+${getCountryCallingCode(code)}`)
}


/**
 * 
 * Obtener numero relacion con pais
 */
export const getPhoneCodeByCountry = (code: string): string => {
  return `+${getCountryCallingCode(code as any)}`
}
