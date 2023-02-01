import React from 'react'
import { useSelector } from 'react-redux'
export default function SubTotal() {
    const count = useSelector(state=>state.count)
  return (
    <>
        <table className='table table-striped table hover'>
            <tr>cart</tr>
            <td>{count}</td>
        </table>
    </>
  )
}
