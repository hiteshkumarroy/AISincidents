import axios from 'axios'

const API_URL = '/api/incidents'

export const getIncidents = () => axios.get(API_URL)
export const createIncident = (incident) => axios.post(API_URL, incident)
export const getIncident = (id) => axios.get(`${API_URL}/${id}`)
export const deleteIncident = (id) => axios.delete(`${API_URL}/${id}`)