//body 태그에 해당하는 js 파일

import './App.css';
import Customer from './components/Customer';

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

]

function App() {
  return (
    // <Customer
    //   id={customer.id}
    //   image={customer.image}
    //   name={customer.name}
    //   birthday={customer.birthday}
    //   gender={customer.gender}
    //   job={customer.job}
    // />
<div>{customers.map(c=>{
  return(
    <Customer
      key={c.id}
      id={c.id}
      image={c.image}
      name={c.name}
      birthday={c.birthday}
      gender={c.gender}
      job={c.job}

/>)})}
</div>

  );
}

export default App;
