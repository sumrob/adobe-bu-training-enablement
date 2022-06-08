/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import React, { Component, useEffect, useState }  from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createEmployee } from './graphql/mutations'
import { listEmployees } from './graphql/queries'

import awsExports from "./aws-exports";


Amplify.configure(awsExports);

const initialState = { name: '', description: '' }
//import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

export const EmployeeContext = React.createContext({
  employees: []
});

export const SkillContext = React.createContext({
  skills: []
});

//function App({ isPassedToWithAuthenticator, signOut, user }) {
function App() {
  //const [formState, setFormState] = useState(initialState)
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    fetchEmployees()
  }, [])

  async function fetchEmployees() {
    try {
      const employeeData = await API.graphql(graphqlOperation(listEmployees))
      const employees = employeeData.data.listEmployees.items
      setEmployees(employees)
      //EmployeeContext.Provider.value = {employees};
      //set context here...
    } catch (err) { console.log('error fetching employees') }
  }

  return (
    <div className="App">
    {
    /*employees.map((employee, index) => (
      <div key={employee.id ? employee.id : index}>
        <p>{employee.id}</p>
        <p>{employee.email}</p>
        <p>{employee.practice}</p>
      </div>
    ))*/
    }
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <EmployeeContext.Provider value={{
            employees
          }}>
            <Route exact path="/employee-list" component={EmployeeList} />
          </EmployeeContext.Provider>
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          <Redirect from="*" to="/dashboard" />
        </Main>
      </Switch>
    </div>
  );
}

//export default withAuthenticator(App);
export default App;