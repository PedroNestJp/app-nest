import axios from 'axios'

const api = axios.create({
    baseURL:"https://pacific-ravine-48145.herokuapp.com"
})

export default api