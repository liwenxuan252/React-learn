import React, { Component } from 'react'
import Modal from './common/Modal'

export default class Test extends Component {
    state = {
        showModal:false
    }

    // 打开Modal框
    openModal = () => {
        console.log('sasa')
        this.setState({
            showModal:true
        })
    }

    // 关闭Modal框
    hideModal = () => {
        this.setState({
            showModal:false
        })
    }

    render() {
        return (
        <div>
            <img src="https://img2.baidu.com/it/u=3180764092,961872304&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1668790800&t=662f670ae8b493ab21835dd61fd32f69" alt="" />
            <button onClick={this.openModal} >打开Modal</button>
            {
                this.state.showModal ? (
                    <Modal  onClose={this.hideModal}>
                        <h1>我是Modal内容的标题</h1>
                        <p>我是内容</p>
                    </Modal>
                ) : null
            }
           
        </div>
        )
    }
}
