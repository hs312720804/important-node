/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = new Map()
  for (let i = 0; i < strs.length; i++) {
      let str = strs[i]
      let obj = {}
      for (let s of str) {
          let code = s.codePointAt() - 'a'.codePointAt()
          // console.log('s', s)
          // console.log('code', code)
          obj[code] = obj[code] ? obj[code]+1 : 1
      }
      const key = obj.toString()
      console.log('obj-->', key)
      console.log('map-->', map)
      console.log('map.has(obj)-->', map.has(key))
      
      if (map.has(key)) {
          let arr = map.get(key)
          arr.push(str)
          map.set(key, arr)
      } else {
          map.set(key, [str])
      }

      console.log('map--------------)->') 

  }

  return Array.from(map.values())
};

strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

console.log(groupAnagrams(strs))
