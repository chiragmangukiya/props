import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './Data';

const name="cdmi";
const arr=[1,2,3,4,5];
let obj={
  name:'cdmi',
  email:'cdmi@gmail.com'
}
let user=[
  {no:1,name:'user 1',email:'user1@gmail.com'},
  {no:2,name:'user 2',email:'user2@gmail.com'},
  {no:3,name:'user 3',email:'user3@gmail.com'},
  {no:4,name:'user 4',email:'user4@gmail.com'}
]

function App() {

  return (
    <>
      <div className="container">
        <h1>{name}</h1>

        <ul>
          {
            arr.map((item)=>{
              return(
                <li>{item}</li>
              );
            })
          }
        </ul>

        <h1>{obj.name} --- {obj.email}</h1>

        <table className='table'>
          <thead>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            {
              user.map((item)=>{
                return(
                  <tr>
                    <td>{item.no}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

        {/* <Data udata={user} /> */}


        <table className='table'>
          <thead>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            {
              user.map((item)=>{
                return(
                  <Data uno={item.no} uname={item.name} uemail={item.email} />              
                )
              }) 
            }
          </tbody>
        </table>

          
      </div>

        


    </>
  );
}

export default App;
