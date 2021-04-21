export const List = ({ users, list }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>项目名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((itemP) => {
          return (
            <tr key={itemP.id}>
              <td>{itemP.name}</td>
              <td>
                {users.find((itemU) => {
                  return itemU.id === itemP.personId
                })?.name || 'unknow'}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
