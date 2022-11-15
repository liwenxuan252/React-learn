import React from 'react'
import './Pager.css'
export default function Pager(props) {
    console.log(props,'props')

    
    /**
     * 期待的用户传入参数
     * 1. total 数据总数量
     * 2. limit 每页数据量
     * 3. current 当前页码
     * 4. pageNumber 数字页码显示的个数
     * 5. onPageChange 事件:当页码切换时候触发的事
     * 
     */

    const allPage =  getAllPageNumber(props);
    const minPage = getMinPageNumber(props);
    const maxPage = getMaxPageNumber(props,allPage,minPage);
    let pageNum = []
    for(let i = minPage;i<=maxPage;i++){
        pageNum.push(<span onClick={() => { pageChange(i,props) }} key={i} className={props.current === i ? 'item active' : 'item'}>{i}</span>)
    }
  return (
    <div>
      <span onClick={() => { pageChange(1,props) }} className={props.current === 1 ? 'item disabled' : 'item'}>首页</span>
      <span onClick={() => { pageChange(props.current - 1 < 0 ? 1 : props.current - 1,props) }} className={props.current === 1 ? 'item disabled' : 'item'}>上一页</span>
      {pageNum}
      <span onClick={() => { pageChange(props.current + 1 > allPage ? allPage : props.current + 1,props)  }} className={props.current === allPage ? 'item disabled' : 'item'}>下一页</span>
      <span onClick={() => { pageChange(allPage,props) }} className={props.current === allPage ? 'item disabled' : 'item'}>尾页</span>
      <span>{props.current}</span>
      /
      <span>{allPage}</span>
    </div>
  )
}

// 页码切换触发的函数
function pageChange(target,props){
    console.log(target,'点击的页码')
    if(target === props.current){
        return 
    }
    props.onPageChange && props.onPageChange(target)
}

// 计算当前总页码数
function getAllPageNumber(props){
    return Math.ceil(props.total / props.limit)
}

// 获得显示的最小页码
function getMinPageNumber(props){
   let min =  props.current - Math.floor(props.pageNumber / 2 );
   if(min <= 1){
       min = 1
   }
   return min
}

// 获得显示的最大页码
function getMaxPageNumber(props,allPage,min){
    let max = props.pageNumber  + min - 1;
    if(max >= allPage){
        max = allPage
    }
    return max
}

