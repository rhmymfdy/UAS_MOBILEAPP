import axios from "axios"

const api = axios.create({
    baseURL : "http://10.0.2.2:8080",
})

const ApiSma = {
    getSd: () => api.get('/sma'),
    getSdById: (id) => api.get(`/sma/${id}`),
    postSd: (data) => api.post('/sma',data),
    updateSd : (id) => api.put(`/sma/${id}`),
    deleteSd: () => api.delete(`/sma/${id}`)
}

export default ApiSma