export const cleanObject = (obj) => {
  const value = { ...obj }
  Object.keys(value).forEach((item) => {
    if (!value[item] && value[item] !== 0) {
      delete value[item]
    }
  })
  return value
}
