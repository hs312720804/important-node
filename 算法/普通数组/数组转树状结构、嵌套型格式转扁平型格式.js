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
  // 缺陷：当需要新增字段时，这个字段是依赖于父级元素，可能因为元素顺序问题，没有办法正确添加字段
  // reduce方式就没有这个问题了，因为他是根据父级从上往下捋的
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


/**
 * 嵌套型格式转扁平型格式
 * @param {Array} data 
 */
function NestedToFlat(data, pid) { 
  var res = []
  for (var i = 0; i < data.length; i++) {
    res.push({
      id: data[i].id,
      name: data[i].name,
      pid: pid || 0
    })
    if (data[i].children) {
      res = res.concat(NestedToFlat(data[i].children, data[i].id));
    }
  }
  return res;
}