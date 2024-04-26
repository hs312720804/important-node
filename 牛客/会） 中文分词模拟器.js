


// https://blog.csdn.net/m0_49245840/article/details/136457567
// https://blog.csdn.net/m0_56809046/article/details/135890424

// ---------------------------------------------------------------------------- 
/*中文分词模拟器*/
// #include <iostream>
// #include <bits/stdc++.h>
// using namespace std;
function main(str,d) {
  // let str;
  let dic = []
  let temp;
 
  for (let i = 0; i < d.length;) {
    while (d[i] != ',' && i < d.length) {
      i++;
    }
    temp = d.slice(0, i);
    dic.push(temp);
    d.splice(0, i + 1);
    i = 0;
  }
  console.log(dic)
  let ans = "";
  let first = 0, last = str.length;
  while (first != str.length) {
    if (str[first] == ',' || str[first] == '.') {
      ans.splice(ans[ans.length - 1] - 1);
      ans += str[first];
      first++;
    }
    else if (str.slice(first, last - first) != dic[dic.length - 1] || (last - first == 1)) {
      ans += str.slice(first, last - first);
      ans += ",";
      first = last;
      last = str.length;
    }
    else last--;

  }
  //核心部分
  for (let i = 0; i < ans.length;) {
    if (ans[i] == '\'' && ans[i - 1] == ',' && ans[i + 1] == ',') {
      ans.splice(i - 1, 1);
      ans.splice(i, 1);
    }
    else i++;
  }
  //单个分号是否单个输出
  // ans.erase(ans.end()-1);
  // cout<<ans<<endl;
  console.log(ans)
}

// a('ilovechina', ['i', 'love', 'china', 'ch', 'na', 've', 'lo', 'this', 'is', 'the', 'word'])
main('ilovechina', ['i', 'ilove', 'lo', 'love', 'ch', 'china', 'lovechina'])
