import * as yup from 'yup'

const Schema= yup.object().shape({
    name: yup.string().required('name is required').min(2,'name must be longer than 2 characters'),
    size: yup.string().required('please choose a size'),
    sauce:yup.string().required('a sauce is required'),
    toppings:yup.array().of(yup.number().max(6,'Can not select more than 6 toppings')),
    substitute:"",
})



export default Schema