import React from 'react'

function Data(props) {
  return (
    <>
     {/* <table className='table'>
          <thead>
               <th>No</th>
               <th>Name</th>
               <th>Email</th>
          </thead>
          <tbody>
               {
                    props.udata.map((item)=>{
                         return(
                              <tr>
                                   <td>{ item.no }</td>
                                   <td>{ item.name }</td>
                                   <td>{ item.email }</td>
                              </tr>
                         )
                    })
               }
          </tbody>
     </table> */}

     <tr>
          <td>{ props.uno }</td>
          <td>{ props.uname }</td>
          <td>{ props.uemail }</td>
     </tr>

    </>
  )
}

export default Data