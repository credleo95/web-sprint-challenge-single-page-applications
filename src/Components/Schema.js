import * as yup from 'yup'

const Schema= yup.object().shape({
    name: yup.string().required('name is required').min(3,'name must be longer than 2 characters'),
})



export default Schema