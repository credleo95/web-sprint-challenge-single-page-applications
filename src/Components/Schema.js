import * as yup from 'yup'

const Schema= yup.object().shape({
    name: yup.string().required('name is required').min(3,'name must be longer than 2 characters'),
 pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  tofu: yup.boolean(),
  mushrooms: yup.boolean(),
  peppers: yup.boolean(),
  pineapple: yup.boolean(), 
  chicken: yup.boolean(),
  threeCheese: yup.boolean(), 
  bacon: yup.boolean(),
  artichoke: yup.boolean(),
  garlic: yup.boolean(),
  substitute: yup.boolean(),
  instructions: yup.string()
})



export default Schema