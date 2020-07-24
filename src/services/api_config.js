const API_KEY = process.env.VUE_APP_KEY
const MAIN_WEB_ADDRESS_WEATHER = `https://api.openweathermap.org/data/2.5/`
const LANG = `&units=metric&APPID=${API_KEY}&lang=pl`

const api = {
  MAIN_WEB_ADDRESS_WEATHER,
  LANG,
  API_KEY,
}
export default api
