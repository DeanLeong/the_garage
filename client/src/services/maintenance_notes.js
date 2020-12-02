import api from './apiConfig';

export const getAllMaintenance_notes = async (id) => {
  const resp = await api.get(`/motorcycles/${id}/maintenance_notes`)
  return resp.data
}

export const getOneMaintenance_note = async (id) => {
  const resp = await api.get(`/motorcycles/${id}/maintenance_notes/${id}`)
  return resp.data
}

export const postMaintenance_note = async (id, maintenance_noteData) => {
  const resp = await api.post(`/motorcycles/${id}/maintenance_notes`, { maintenance_note: maintenance_noteData })
  return resp.data
}

export const putMaintenance_note = async (id, maintenance_noteData) => {
  const resp = await api.put(`/motorcycles/${id}/maintenance_notes/${id}`, { maintenance_note: maintenance_noteData })
  return resp.data
}

export const destroyMaintenance_note = async (id) => {
  const resp = await api.delete(`/motorcycles/${id}/maintenance_notes/${id}`)
  return resp
}