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
import React, { Component, useState, useEffect }  from 'react';
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
} from "antd";

import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import anurag from "../assets/images/Anurag-face.png";
import roopa from "../assets/images/Roopa.png";
import prakash from "../assets/images/prakash-face.jpg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import pencil from "../assets/images/pencil.svg";

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import Amplify, { API, graphqlOperation } from 'aws-amplify';
//import awsExports from '../aws-exports';


//import graphQL stuff
import { listEmployees } from '../graphql/queries'

//function AdminView({isPassedToWithAuthenticator, signOut, user }) {
function AdminView({ isPassedToWithAuthenticator, signOut, user }) {
  console.log('[AdminView.js...here1]');
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    console.log('[AdminView.js...here2]');
    fetchEmployees();
  }, [])
  
  async function fetchEmployees() {
    try {
      const employeeData = await API.graphql(graphqlOperation(listEmployees))
      console.log('[AdminView.js]...fetchEmployees...' + employeeData);
      const employeesFromAPI = employeeData.data.listEmployees.items
      /*await Promise.all(employeesFromAPI.map(async employee => {
        if (employee.image) {
          const image = await Storage.get(employee.image);
          employee.image = image;
        }
      return employee;
      }))*/
      setEmployees(employeeData.data.listEmployees.items)
    } catch (err) { console.log('error fetching employees') }
  }



const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

employees.map(employee => (
  <div key={employee.id || employee.email}>
    <h2>Email: {employee.email}</h2>
    <p>Practice: {employee.practice}</p>
  </div>

))

// table code start
/*const columns = [
  {
    title: "EMPLOYEE",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "FUNCTION",
    dataIndex: "function",
    key: "function",
  },

  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "EMPLOYED",
    key: "employed",
    dataIndex: "employed",
  },
];

const data = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={anurag}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Anurag Sharma</Title>
            <p>anurag.sharma@perficient.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Director</Title>
          <p>Content</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">
          Complete
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>11/04/18</span>
          <a href="#pablo"> Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={roopa}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Roopa Badapati</Title>
            <p>roopa.badapati@perficient.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Associate</Title>
          <p>Content</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">INCOMPLETE</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>01/06/22</span>
          <a href="#roopa"> Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "3",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src={prakash}
          ></Avatar>
          <div className="avatar-info">
            <Title level={5}>Prakash Venkatesh</Title>
            <p>prakash.venkatesh@perficient.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <Title level={5}>Sr. Technical Architect</Title>
          <p>Projects</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          INCOMPLETE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>1/10/07</span> 
          <a href="#pablo"> Edit</a>
        </div>
      </>
    ),
  },
];*/

}
export default withAuthenticator(AdminView);
