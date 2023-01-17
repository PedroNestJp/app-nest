import axios from 'axios'

const api = axios.create({
    baseURL:"mysql://kqt9aeyvsabaauen:irbtmhgqg823b1ib@td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/ezer9ndy7x4h2g05"
})

export default api