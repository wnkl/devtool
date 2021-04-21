import { useEffect, useState } from 'react'

export const cleanObject = (obj) => {
  const value = { ...obj }
  Object.keys(value).forEach((item) => {
    if (!value[item] && value[item] !== 0) {
      delete value[item]
    }
  })
  return value
}

export const useDebounce = (obj, delay) => {
  const [debounceValue, setDebounceValue] = useState()
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(obj)
    }, delay)
    return () => {
      clearTimeout(timeout)
    }
  }, [obj, delay])
  return debounceValue
}
