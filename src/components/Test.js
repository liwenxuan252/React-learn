import React, { Component } from 'react'
import ThreeLayout from './common/ThreeLayout'

export default class Test extends Component {


    render() {
        return (
        <div>
            <ThreeLayout 
                left={
                    <p>
                        我是左侧区域内容
                    </p>
                }
                right={
                    <p>
                        我是右侧区域内容
                    </p>
                }
                gap={20}
            >
                <h1>我是中间部门内容的title</h1>
                <p>
                    西伯利亚雪橇犬是原始的古老犬种，主要生活在西伯利亚东北部、格陵兰南部。哈士奇名字是源自其独特的嘶哑叫声。 [1]  哈士奇性格多变，有的极端胆小，也有的极端暴力，进入人类社会和家庭的哈士奇，都已经没有了这种极端的性格，比较温顺，是一种流行于全球的宠物犬 [2]  ，被世界各地人们广泛饲养，并在全球范围内有大量该犬种的赛事
                </p>
            </ThreeLayout>
        </div>
        )
    }
}
