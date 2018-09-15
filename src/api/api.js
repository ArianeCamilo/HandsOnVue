import axios from 'axios'

// Cria instância do axios chamando a url da API
export default () => {
  return axios.create({
    baseURL: `https://vue-api-curso.herokuapp.com/`
  })
}
