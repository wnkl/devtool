import { useEffect, useState } from 'react'
import { List } from './list'
import { Search } from './search'

export const ProjectListPanel = () => {
  const [list, setList] = useState([])
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/users').then(async (res) => {
      setUsers(await res.json())
    })
  }, [])
  useEffect(() => {
    fetch('http://localhost:3001/projects').then(async (res) => {
      setList(await res.json())
    })
  }, [])
  return (
    <div>
      <List users={users} list={list} />
    </div>
  )
}
