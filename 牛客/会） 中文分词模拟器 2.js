


// https://blog.csdn.net/m0_49245840/article/details/136457567
// https://blog.csdn.net/m0_56809046/article/details/135890424

// ---------------------------------------------------------------------------- 
/*中文分词模拟器*/
// #include <iostream>
// #include <bits/stdc++.h>
// using namespace std;


// # 定义 TrieNode 类，每个节点包含一个布尔值 is_word 和一个 TrieNode 类型的数组 children
// class TrieNode:
//     def __init__(self):
//         self.is_word = False  # 标记该节点是否为一个单词的结束
//         self.children = [None] * 26  # 存储子节点的数组，每个元素对应一个字母

// # 创建 Trie 的根节点
// root = TrieNode()

// # 插入方法，用于向 Trie 中插入一个单词
// def insert(word):
//     node = root  # 从根节点开始
//     for i in word:
//         index = ord(i) - ord('a')  # 计算当前字符对应的索引
//         # 如果当前字符对应的子节点为空，则创建一个新的子节点
//         if node.children[index] is None:
//             node.children[index] = TrieNode()
//         # 移动到下一个子节点
//         node = node.children[index]
//     # 标记当前节点为一个单词的结束
//     node.is_word = True

// # 输入句子，并将其转换为小写
// sentence = input().lower()
// # 输入字典，字典中的单词以逗号分隔
// dictionary = input().split(",")
// for word in dictionary:
//     insert(word.lower())  # 将字典中的每个单词插入到 Trie 中

// 题解：
// 1、中文分词模拟器
// 给定一个连续不包含空格的字符串，该字符串仅包含英文小写字母及英文标点符号（逗号、分号、句号），同时给定词库，对该字符串进行精确分词。分词原则：采用分词顺序优先且最长匹配原则

// 输入描述：
// 第一行输入待分词语句 “ilovechina”，字符串长度限制：0 < length < 256
// 第二行输入中文词库 “i,love,china,ch,na,ve,lo,this,is,this,word”，词库长度限制：1 < length < 100000
// 输出描述：
// 按顺序输出分词结果 “i,love,china”
// ————————————————

function test (sentence, Trie) {

  let result = []  //# 存储结果
  let start = 0

  // # 遍历句子中的每个字符
  while (start < sentence.length){

      // # 如果当前字符i不是字母，则直接将其添加到结果中
      if (!sentence[start].match(/[a-z]/g)) {

        // result.push(sentence[start])
        start++
        continue  //# 跳过此次迭代，继续下一次迭代
      }

      // # 如果当前字符i是字母，则从句子的末尾开始，寻找以该字符为起点的最长的在字典中存在的单词
      end = sentence.length
      while (end > start) {

        // node = root
        for(let k = start; k < end; k++) {

          // # 如果当前字符不是字母，或者在 Trie 中不存在当前字符对应的节点，则说明i:j字符串不是一个单词，终止for循环
          let flagIndex = Trie.findIndex(item => item === sentence[k])
          if (!sentence[k].match(/[a-z]/g) || flagIndex === -1) {
            break  //# 终止循环，不再执行后续的迭代
          }
    
          // # 如果当前字符是字母，且在 Trie 中存在当前字符对应的节点，则移动到下一个子节点继续判断
          // node = node.children[ord(sentence[k]) - ord('a')]
        }


        // # 如果i:j字符串是一个单词，则终止while循环
        let flagIndex = Trie.findIndex(item => item === sentence.slice(start, end))
        if (flagIndex > -1) {
          break
        }
        // # 如果i:j字符串不是一个单词，则缩短该字符串
        end--
      }
    // # 如果没有找到单词，则将当前字符作为一个单独的单词添加到结果中
    if (end == start) {
      result.push(sentence[start])
      start++
    }

    // # 如果找到了单词，则将该单词添加到结果中
    else{
      result.push(sentence.slice(start, end))
      start = end
    }
  }

// # 输出结果，单词之间以逗号分隔
  console.log(result)
}


// test('ilovechina', ['i', 'love', 'china', 'ch', 'na', 've', 'lo', 'this', 'is', 'the', 'word'])
// test('ilovechina', ['i', 'ilove', 'lo', 'love', 'ch', 'china', 'lovechina'])
test('ilovechina,thewordisbeautiful', 
['i','love','china','ch','na','ve','lo','this','is','the','word','beauti', 'tiful','ful'])
