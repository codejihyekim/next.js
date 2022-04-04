import axios from "axios";
const SERVER = `http://localhost:8080`

export const userSignin = loginRequest => axios.post(`${SERVER}/user/sign-in`,sign-inRequest)
export const userSignup = loginRequest => axios.post(`${SERVER}/user/sign-up`,sign-upRequest)