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
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Button,
  Avatar,
  Typography,
} from "antd";


import React, { Component, useEffect, useState }  from 'react';
//Data Context
import { EmployeeContext } from '../App.js'
// Images
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";

const { Title } = Typography;

const EmployeeList = (props) => {
  const context = React.useContext(EmployeeContext);

  // table code start
  const columns = [
    {
      title: "EMPLOYEE",
      dataIndex: "name",
      key: "name",
      width: "32%",
    },
    {
      title: "ROLE",
      dataIndex: "function",
      key: "function",
    },
    {
      title: "ASSESSMENT STATUS",
      key: "status",
      dataIndex: "status",
    }
  ];

  context.employees.map ((employee, i) => ( 
    console.log("EmployeeList.js - " + employee.email))
  );
  //data for table
  const data = [
    context.employees.map ((employee, i) => (
      { 
        key: String(i),
        name: (
          <>
            <Avatar.Group>
              <Avatar
                className="shape-avatar"
                shape="square"
                size={40}
                src={face2}x
              ></Avatar>
              <div className="avatar-info">
                <Title level={5}></Title>
                <p> {employee.email} </p>
              </div>
            </Avatar.Group>{" "}
          </>
        ),
        function: (
          <>
            <div className="author-info">
              <Title level={5}>Sr. Technical Architect</Title>
              <p>{employee.practice}</p>
            </div>
          </>
        ),
  
        status: (
          <>
            <Button type="primary" className="tag-primary">
              COMPLETED
            </Button>
          </>
        ),
        employed: (
          <>
            <div className="ant-employed">
              <span>23/04/18</span>
              <a href="#{employee.email}">Edit</a>
            </div>
          </>
        )
        
      }  
    ))
  ];

  const data2 = [
    {
      key: "1",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face2}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Michael John</Title>
              <p>michael@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Manager</Title>
            <p>Organization</p>
          </div>
        </>
      ),

      status: (
        <>
          <Button type="primary" className="tag-primary">
            ONLINE
          </Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>23/04/18</span>
            <a href="#pablo">Edit</a>
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
              src={face3}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Alexa Liras</Title>
              <p>alexa@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Programator</Title>
            <p>Developer</p>
          </div>
        </>
      ),

      status: (
        <>
          <Button className="tag-badge">ONLINE</Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>23/12/20</span>
            <a href="#pablo">Edit</a>
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
              src={face}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Laure Perrier</Title>
              <p>laure@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Executive</Title>
            <p>Projects</p>
          </div>
        </>
      ),

      status: (
        <>
          <Button type="primary" className="tag-primary">
            ONLINE
          </Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>03/04/21</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
    {
      key: "4",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face4}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Miriam Eric</Title>
              <p>miriam@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Marketing</Title>
            <p>Organization</p>
          </div>
        </>
      ),

      status: (
        <>
          <Button type="primary" className="tag-primary">
            ONLINE
          </Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>03/04/21</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
    {
      key: "5",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face5}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Richard Gran</Title>
              <p>richard@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Manager</Title>
            <p>Organization</p>
          </div>
        </>
      ),

      status: (
        <>
          <Button className="tag-badge">ONLINE</Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>23/03/20</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },

    {
      key: "6",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face6}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>John Levi</Title>
              <p>john@mail.com</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Tester</Title>
            <p>Developer</p>
          </div>
        </>
      ),

      status: (
        <>
          <Button className="tag-badge">ONLINE</Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>14/04/17</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
  ];

  
//function AdminView() {
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Employee Assessments"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="a">
                    <Radio.Button value="a">Incomplete</Radio.Button>
                    <Radio.Button value="b">COMPLETED</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      
      {
        context.employees.map ((employee, i) => (
          <div className="table-responsive" key={employee.id ? employee.id : i}>
            <p>{employee.id}</p>
            <p>{employee.email}</p>
            <p>{employee.practice}</p>
          </div>
        ))  
      }
    </>
  );
}
export default EmployeeList;
