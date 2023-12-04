// 作者：一只豆豆
// 链接：https://juejin.cn/post/7098649784562483230
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
const flatArr = [
  { id: '01', parentId: 0, name: '节点1' },
  { id: '011', parentId: '01', name: '节点1-1' },
  { id: '0111', parentId: '011', name: '节点1-1-1' },
  { id: '02', parentId: 0, name: '节点2' },
  { id: '022', parentId: '02', name: '节点2-2' },
  { id: '023', parentId: '02', name: '节点2-3' },
  { id: '0222', parentId: '022', name: '节点2-2-2' },
  { id: '03', parentId: 0, name: '节点3' },
]

// function getTreeData (data) {
//   return data.filter(item => {
//     item.child = data.filter(item2 => {
//       return item.id === item2.parentId
//     })
//     return !item.parentId
//   })
// }

console.log(getTreeData(flatArr))



// function getTreeData (data,parentId) {
//   function getChild (parentId) {
//     return data.filter(item => item.parentId === parentId)
//   }
//   data.reduce((pre, current) => {
//     if (current.parentId === parentId) {
 
//     }
//     pre = getChild(current.parentId)
//   }, [])
// }

// 非递归方式：
function getTreeData (data) {
  // 利用两层filter实现
  return data.filter(item => {
    item.child = data.filter(item2 => {
      return item.id === item2.parentId
    })
    return !item.parentId
  })
}

// 递归方式：
function getTreeData (data, parentId) {
  function getChildByParentId (parentId) {
    return data.reduce((prev, current) => {
      if (current.parentId === parentId) {
        current.child = getChildByParentId(current.id)
        prev.push(current)
      }
      return prev

    }, [])
  }
  return getChildByParentId(0)
}