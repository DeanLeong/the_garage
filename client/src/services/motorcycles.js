import api from './apiConfig';

export const getAllMotorcycles = async () => {
  const resp = await api.get(`/motorcycles`)
  return resp.data
}

export const getOneMotorcycle = async (id) => {
  const resp = await api.get(`/motorcycles/${id}`)
  return resp.data
}

export const postMotorcycle = async (motorcycleData) => {
  const resp = await api.post(`/motorcycles`, { motorcycle: motorcycleData })
  return resp.data
}