import react,{Component} from 'react'

const TableBody = (props) => {
    const name = props.name.map((row,index)=>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td> <button onClick={()=> props.removeName(index)}>Delete</button> </td>
            </tr>
        )
    })
    return <tbody>{name}</tbody>   
}
const HeaderName = (props) => {
    const anmae = props.aname;
    return (
        <h1> {anmae} </h1>
    )
}
const TableHead = () => {
    return (
    <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Action</th>
        </tr>
      </thead>
      )
}
const Table = (props) => {
    console.log(props);
    const {names, removeName} = props
    return(
        <table>
            <TableHead />
            <TableBody name = {names} removeName = {removeName} />
            </table>
    )
}
// class Table extends Component{
//     render(){
//         // console.log(this.props);
//         const {name, removeName} = props
//         return(
//             <div>
//           <table>
//             <TableHead />
//             <TableBody name = {name} removeName = {removeName} />
//             </table>
//             <HeaderName  aname = {this.props.name}/>
//          </div>
        
//         )
//     }
// }

export default Table