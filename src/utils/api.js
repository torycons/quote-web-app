import axios from 'axios'

const host = 'http://localhost:3000/'

export default {
    signup: (user) => {
        let encodeURI = window.encodeURI( host + 'user/signup')

        return axios.post(encodeURI, {
            email: user.email,
            password: user.password,
            name: user.name
        })
        .then((response) => {
            return response
        }).catch((e) => {
            return e.response
        })
    },

    login: (user) => {
        let encodeURI = window.encodeURI( host + 'user/login')

        return axios.post(encodeURI, {
            email: user.email,
            password: user.password
        })
        .then((response) => {
            return response
        }).catch((e) => {
            return e.response
        })
    }
}