import { API_SERVER_HOST } from './todoAPI'
import axios from 'axios'


const host = `${API_SERVER_HOST}/api/products`

export const postAdd = async (product) => {
  const header = {header: {'Content-Type': 'multipart/form-data'}}

  const res = await axios.post(`${host}/`, product, header)

  return res.data
}// postAdd
