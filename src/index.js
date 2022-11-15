import React from 'react';
import  { createRoot }  from 'react-dom/client';
import StudentList from './components/StudentList';

const container = document.getElementById('root');
const root = createRoot(container);

// 获取学生数据
async function fetchAllStudents(){
   const stu = await fetch("./test.json").then(resp => resp.json()).then(resp => resp.data);
   return stu
}

// 渲染学生列表
async function render(){
    const stus = await fetchAllStudents();
    return root.render(<StudentList stus={stus} />)
}
render()
