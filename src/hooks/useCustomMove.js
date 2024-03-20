import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'

const getNum = (param, defaultValue) => {
  if(!param) {
    return defaultValue
  }// if

  return parseInt(param)
}// getNum

const useCustomMove = () => {
  const navigate = useNavigate()

  const [queryParams] = useSearchParams()

  const page = getNum(queryParams.get('page'), 1)
  const size = getNum(queryParams.get('size'), 10)

  const queryDefault = createSearchParams({page, size}).toString()

  const moveToList = (pageParam) => {
    let queryStr = ''

    if(pageParam) {
      const pageNum = getNum(pageParam.page, 1)
      const pageSize = getNum(pageParam.size, 10)

      queryStr = createSearchParams({page: pageNum, size: pageSize}).toString()
    }else {
      queryStr = queryDefault
    }// if-else

    navigate({pathname: '../list', search: queryDefault})
  }// moveToList

  return {
    moveToList
  }
}// useCustomMove

export default useCustomMove