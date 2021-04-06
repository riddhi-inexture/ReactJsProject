import react,{Component} from 'react'
import Table from './Table'

class App extends Component{
  state = {
    names :[
      {
        name: 'Riddhi',
        age : 22
      },
      {
        name : 'ABC',
        age : 34
      },
      {
        name : 'ABC',
        age : 34
      },
      {
        name : 'ABC',
        age : 34
      },
      {
        name : 'ABC',
        age : 34
      },
      {
        name : 'ABC',
        age : 34
      },
      {
        name : 'ABC',
        age : 34
      },
      {
        name : 'ABC',
        age : 34
      },
      {
        name : 'ABC',
        age : 34
      },
      {
        name : 'ABC',
        age : 34
      },
      {
        name : 'ABC',
        age : 34
      },
      {
        name : 'ABC',
        age : 34
      }
    ]
  }

  removeName = (index) =>{
    const {names} = this.state
    // console.log(this.state);
    this.setState({
      names : names.filter((name,i)=>{
        return i !== index
      }),
    })
  }
    render(){

      const {names} = this.state
      // console.log({names});
      return (
        <div className = 'container'> 
        <Table names = {names} removeName = {this.removeName} />
        </div>
      )
    }
  }
  export default App