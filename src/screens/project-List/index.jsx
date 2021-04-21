import { useEffect, useState } from 'react'
import { List } from './list'
import { Search } from './search'
import qs from 'qs'
import { cleanObject } from 'utils'

export const ProjectListPanel = () => {
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  let [search, setSearch] = useState({ name: '', personId: '' })
  useEffect(() => {
    fetch(
      `http://localhost:3001/projects?${qs.stringify(cleanObject(search))}`
    ).then(async (res) => {
      setList(await res.json())
    })
  }, [search])
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
