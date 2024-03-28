import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'

const getNum = (param, defaultValue) => {
  if(!param) {
    return defaultValue
  }// if

  return parseInt(param)
}// getNum

const useCustomMove = () => {
  const navigate = useNavigate()

  const [refresh, setRefresh] = useState(false)

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

    setRefresh(!refresh)

    navigate({pathname: '../list', search: queryStr})
  }// moveToList

  const moveToModify = (num) => {
    navigate({
      pathname: `../modify/${num}`,
      search: queryDefault
    })
  }

  const moveToRead = (num) => {
    navigate({
      pathname: `../read/${num}`,
      search: queryDefault
    })
  }

  return {
    moveToList,
    moveToModify,
    moveToRead,
    page,
    size,
    refresh
  }
}// useCustomMove

export default useCustomMove