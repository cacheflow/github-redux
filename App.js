import ReactDOM from 'react-dom';
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
const potentialCategories = ["housing", "forSale", "community", "personals", "jobs"]

class App extends React.Component {
    constructor(props) {
      super(props)
    }
    showCategories() {
      potentialCategories.map((category, id) => {
        console.log("cateogory is ", category)
      });
    }

    doStuff(data) {
      console.log("Woo", data)
    }
    render() {
      const {fields: {firstName, lastName, email, category}, handleSubmit} = this.props;
       return (
         <form onSubmit={this.props.handleSubmit(this.doStuff.bind(this))}>
           <div>
             <label>First Name</label>
             <input type="text" placeholder="First Name" {...firstName}/>
           </div>
           <div>
             <label>Last Name</label>
             <input type="text" placeholder="Last Name" {...lastName}/>
           </div>
           <div>
             <label>Email</label>
              <input type="text" placeholder="Last Name" {...email}/>
          </div>
          <div>
            <select className="form-control" multiple {...category}>
              {potentialCategories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>
          </div>
           <button type="submit">Submit</button>
         </form>
       );
    }
}

App = reduxForm({
  form: 'github',
  fields: ['firstName', 'lastName', 'email', 'category']
})(App);

export default App;
