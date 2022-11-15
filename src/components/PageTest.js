import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList'

export default class PageTest extends Component {
  state = {
    total:100,
    limit:10,
    pageNumber:5,
    current:1,
    students:[],
  }
  constructor(props){
    super(props);
    this.fetchStudentInfo()
  }
  handlePageClick = (newPage) => {
    this.setState({
        current:newPage
    })
    console.log(newPage,'111')
    this.fetchStudentInfo(newPage)
  }


  // 通过fetch请求学生列表的数据
  async fetchStudentInfo(newPage = 1){
    console.log(this.state.current,'uuu')
    const appkey = 'demo13_1545210570249';
    const data = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${newPage}&size=${this.state.limit}`)
      .then(resp => resp.json()).then(resp => resp.data)
    this.setState({
      total:data.cont,
      students:data.findByPage
    })
  }


  render() {
    return (
      <div>
        <StudentList stus={this.state.students} />
        <Pager onPageChange={this.handlePageClick}  {...this.state} />
      </div>
    )
  }
}



