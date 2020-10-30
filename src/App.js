//body 태그에 해당하는 js 파일

import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';
import { Component } from 'react';
import { render } from '@testing-library/react';

const styles={
root:{
  width:'100%',
  overflowX:"auto"

},
table:{
  minWidth:1080
}
};

const customers=[{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'Cindy',
  'birthday':'111111',
  'gender':'Women',
  'job':'Actor'

},{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'Boo',
  'birthday':'222222',
  'gender':'Men',
  'job':'Actor'

},{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name':'Apple',
  'birthday':'333333',
  'gender':'Women',
  'job':'Fruits'

}

];

/*function App() {
  return (
    // <Customer
    //   id={customer.id}
    //   image={customer.image}
    //   name={customer.name}
    //   birthday={customer.birthday}
    //   gender={customer.gender}
    //   job={customer.job}
    // />
  );
}*/

class App extends Component{
  render(){
  const {classes}=this.props;
  return (
<Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Job</TableCell>
          </TableRow>

      </TableHead>
      <TableBody>
    {customers.map(c=>{return(<Customer key={c.id} id={c.id} image={c.image} name={c.name}  birthday={c.birthday} gender={c.gender} job={c.job}/> )})}
    </TableBody>
    </Table>
</Paper>

  );

}}

export default withStyles(styles)(App);
