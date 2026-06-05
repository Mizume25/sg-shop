/**
 * 
 * Archivo para obtener store de Licencias
 * 
 */
import { getCountriesNames, getPhoneCodeByCountry, getCountryCode } from '../pages/test/api/helpers/h-pr1';
import type { Schema } from '../pages/test/api/helpers/h-pr1';
import type { Reactive } from 'vue';


export const useLicensesForm = () => {



    /** Lista de Paises Ractivos */
    const CountrieNames: Ref<string[]> = ref(getCountriesNames());


    /** Estado reactivo del fomrulario */
    const FormState: Reactive<Schema> = reactive({
        name: '',
        age: 20,
        birthDate: '',
        nationality: 'España',
        email: '',
        phone: '',
        street: '',
        number: 0,
        floor: '',
        city: '',
        region: '',
        zipCode: '',
        type: 'B',
        yearObtained: 2000,
        expirationDate: '',
    })


    const CountryNumber: ComputedRef<string> = computed(() => getPhoneCodeByCountry(getCountryCode(FormState.nationality)))

    /** Dinamizacion de iconos */
    const iconV = (): string => {
        switch (FormState.type) {
            case 'AM':
            case 'A1':
            case 'A2':
            case 'A':
                return 'lucide:motorbike';
            case 'C1':
            case 'C':
            case 'D1':
            case 'D':
            case 'BE':
            case 'CE':
                return 'lucide:truck';
            default: 'B'
                return 'lucide:car'
        }
    }



    const cleanContent = () => {
        Object.assign(FormState, {
            name: '',
            age: 20,
            birthDate: '',
            nationality: 'España',
            email: '',
            phone: '',
            street: '',
            number: 0,
            floor: '',
            city: '',
            region: '',
            zipCode: '',
            type: 'B',
            yearObtained: 2000,
            expirationDate: '',
        })
    }


    return {
        CountrieNames,
        FormState,
        CountryNumber,
        iconV,
        cleanContent
    }
}