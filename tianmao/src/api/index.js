const BASE_URL = "http://localhost:8080" //如果这里是后端的地址  就换成后端的地址

const api = {
  behotting: `${BASE_URL}/ajax/movieOnInfoList`,
  willhot: `${BASE_URL}/ajax/mostExpected`,
  willshow:`${BASE_URL}/ajax/comingList`
}

export default api 