import client from './client'

//전문 분야로 사진 작가 목록 조회
export const getKeywordSearch = async (keyword) => {
  try {
    const res = await client.get(`/photographers/search?keyword=${keyword}`)
    return res.data
  } catch (err) {
    console.log('에러 발생', err)
  }
}

//사진 작가 목록 조회
export const getPhotographerList = async (areaId, special, ableDate, sort) => {
  try {
    let endpoint = '/photographers'
    const queryParams = []

    if (areaId) {
      queryParams.push(`areaId=${areaId}`)
    }
    if (special) {
      queryParams.push(`special=${special}`)
    }
    if (ableDate) {
      queryParams.push(`ableDate=${ableDate}`)
    }
    if (sort && sort.length > 0) {
      queryParams.push(`sort=${sort}`)
    }

    if (queryParams.length > 0) {
      endpoint += '?' + queryParams.join('&')
    }
    console.log(endpoint)
    const res = await client.get(endpoint)
    return res.data
  } catch (err) {
    console.error('에러 발생', err)
    throw err
  }
}
