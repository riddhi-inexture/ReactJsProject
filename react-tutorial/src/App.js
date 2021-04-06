import react,{Component} from 'react'
import Table from './Table'
import Form from './form'

class App extends Component{
  state = {
    names :[
      // {
      //   name: 'Riddhi',
      //   age : 22
      // },
      // {
      //   name : 'ABC',
      //   age : 34
      // },
      // {
      //   name : 'ABC',
      //   age : 34
      // },
      // {
      //   name : 'ABC',
      //   age : 34
      // },
      // {
      //   name : 'ABC',
      //   age : 34
      // },
      // {
      //   name : 'ABC',
      //   age : 34
      // },
      // {
      //   name : 'ABC',
      //   age : 34
      // },
      // {
      //   name : 'ABC',
      //   age : 34
      // },
      // {
      //   name : 'ABC',
      //   age : 34
      // },
      // {
      //   name : 'ABC',
      //   age : 34
      // },
      // {
      //   name : 'ABC',
      //   age : 34
      // },
      // {
      //   name : 'ABC',
      //   age : 34
      // }
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
        <Form handleSubmit= {this.handleSubmit}/>
        </div>
      )
    }
    handleSubmit = (name)=>{
      this.setState({names:[...this.state.names,name]})
      console.log(this.state);
    }
  }
  export default App