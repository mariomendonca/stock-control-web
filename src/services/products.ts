import { productTypes } from "../types";
import { api } from "./api";

export async function getAllProducts() {
  const res = await api.get('/product')
  return res
}

export async function createProduct(body: productTypes) {
  const res = await api.post('/product', body)
  return res
}
