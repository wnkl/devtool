import { useEffect, useState } from 'react'
import { List } from './list'
import { Search } from './search'
import qs from 'qs'
import { cleanObject, useDebounce } from 'utils'

export const ProjectListPanel = () => {
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  let [search, setSearch] = useState({ name: '', personId: '' })
  const debounceParam = useDebounce(search, 1000)
  useEffect(() => {
    fetch(
      `http://localhost:3001/projects?${qs.stringify(
        cleanObject(debounceParam)
      )}`
    ).then(async (res) => {
      setList(await res.json())
    })
  }, [debounceParam])
  useEffect(() => {
    fetch('http://localhost:3001/users').then(async (res) => {
      setUsers(await res.json())
    })
  }, [])
  return (
    <div>
      <Search search={search} setSearch={setSearch} users={users} />
      <List users={users} list={list} />
    </div>
  )
}
