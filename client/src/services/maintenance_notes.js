import api from './apiConfig';

export const getAllMaintenance_notes = async (id) => {
  const resp = await api.get(`/users/${id}/motorcycles/${id}/maintenance_notes`)
  return resp.data
}

export const getOneMaintenance_note = async (id) => {
  const resp = await api.get(`/users/${id}/motorcycles/${id}/maintenance_notes/${id}`)
  return resp.data
}

export const postMaintenance_note = async (maintenance_noteData) => {
  const resp = await api.post(`/users/${id}/motorcycles/${id}/maintenance_notes`, { maintenance_note: maintenance_noteData })
  return resp.data
}