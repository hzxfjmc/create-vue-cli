// 使用 Mock
import Mock from 'mockjs'
import modules from './modules'
// console.log('modules', modules)
// const Random = Mock.Random

// 注册每个 mock api
for (let key in modules) {
    let module = modules[key]
    // console.log('module:>>>', module)
    Mock.mock(...module)
}

// 反向校验真实数据
// let prev = {
//     'age|1-2': [
//         {
//             'name|0-3': '@word(3)',
//             x: ''
//         }
//     ]
// }
// console.log(Mock.mock(prev))
// let next = {
//     age: [
//         {
//             name: '4',
//             x: ''
//         }
//     ]
// }
// console.log(Mock.valid(prev, next))
