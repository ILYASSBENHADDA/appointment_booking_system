import axios from 'axios'

export default axios.create({
     baseURL: 'http://172.16.9.229:5000/api/'
})