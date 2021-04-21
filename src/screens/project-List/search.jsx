export const Search = ({ search, setSearch, users }) => {
  const handleInputChange = (e) => {
    setSearch({ ...search, name: e.target.value })
  }
  const handleSelectChange = (e) => {
    setSearch({ ...search, personId: e.target.value })
  }
  return (
    <form>
      <input type="text" placeholder="项目名称" onChange={handleInputChange} />
      <select onChange={handleSelectChange}>
        <option value="">负责人</option>
        {users.map((item) => {
          return <option value={item.id}>{item.name}</option>
        })}
      </select>
    </form>
  )
}
