import axios from "axios";

const api = axios.create({
    baseURL : "http://10.0.2.2:8000",
})

const ApiSmp = {
    getSmp : () => api.get('/smp'),
    getSmpById : (id) => api.get(`/smp/${id}`),
    postSmp : (data) => api.post('/smp',data),
    updateSmp : (id,data) => api.put(`/smp/${id}`,data),
    deleteSmp : (id) => api.delete(`/smp/${id}`),
}

export default ApiSmp;