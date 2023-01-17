import axios from 'axios'

const api = axios.create({
    baseURL:"https://nest-app.herokuapp.com:3001"
})

export default api