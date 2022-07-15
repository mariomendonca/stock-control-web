import { Formik } from "formik";
import { createProduct } from "../services/products";
import { productTypes } from "../types";

export function CreateProduct() {
  async function handleCreateProduct(body: productTypes) {
    try {
      await createProduct(body)
      alert('producto criado')
    } catch (error) {
      alert(error)
    }
  }


  return (
    <div className="flex flex-col">
      <Formik
        initialValues={{
          name: '',
          quantity: 0,
          price: ''
        }}
        onSubmit={handleCreateProduct}
      >
        {({ handleBlur, handleChange, handleSubmit }) => (
          <>
            <input
              className="border border-red-300"
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              placeholder="Nome do produto"
              />
            <input
              className="border border-red-300"
              onChange={handleChange('price')}
              onBlur={handleBlur('price')}
              placeholder="Valor do produto"
              />
            <input
              className="border border-red-300"
              type={'number'}
              onChange={handleChange('quantity')}
              onBlur={handleBlur('quantity')}
            />
            <button onClick={() => handleSubmit()} className="bg-red-300">Criar produto</button>
          </>
        )}
      </Formik>
    </div>
  )
}