import { useEffect, useState } from 'react'

export const List = (props) => {
  console.log(props)
  return (
    <table>
      <thead>
        <tr>
          <th>项目名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((itemP) => {
          return (
            <tr key={itemP.id}>
              <td>{itemP.name}</td>
              <td>
                {props.users.find((itemU) => {
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
