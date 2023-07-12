import axios from "axios"

const api = axios.create({
    baseURL : "http://10.0.2.2:8080",
})

const ApiSd = {
    getSd: () => api.get('/sd'),
    getSdById: (id) => api.get(`/sd/${id}`),
    postSd: (data) => api.post('/sd',data),
    updateSd : (id,data) => api.put(`/sd/${id}`,data),
    deleteSd: (id) => api.delete(`/sd/${id}`)
}

export default ApiSd