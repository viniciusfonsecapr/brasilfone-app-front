import axios from  'axios'


const apiBrasilFone = axios.create({
    baseURL: 'http://localhost:3001'
})

export default apiBrasilFone