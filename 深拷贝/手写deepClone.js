// mark from ：https://www.conardli.top/docs/javascript/%E6%B5%85%E6%8B%B7%E8%B4%9D%E5%92%8C%E6%B7%B1%E6%8B%B7%E8%B4%9D.html

// 可以继续遍历的类型
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

// 不可以继续遍历的类型
const boolTag = '[object Boolean]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const errorTag = '[object Error]';

const dateTag = '[object Date]'; // 时间
const regexpTag = '[object RegExp]'; // 正则
const symbolTag = '[object Symbol]'; // symbol
const funcTag = '[object Function]'; // 函数

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}

// 是否为引用类型
function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}

function getType(target) {
    return Object.prototype.toString.call(target);
}

function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}
// 复制 Symbol 类型
function cloneSymbol(targe) {
    return Object(Symbol.prototype.valueOf.call(targe));
}

// 复制 正则表达式
function cloneReg(targe) {
    const reFlags = /\w*$/;
    const result = new targe.constructor(targe.source, reFlags.exec(targe));
    result.lastIndex = targe.lastIndex;
    return result;
}

// 复制 函数
function cloneFunction(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    if (func.prototype) {
        const param = paramReg.exec(funcString);
        const body = bodyReg.exec(funcString);
        if (body) {
            if (param) {
                const paramArr = param[0].split(',');
                return new Function(...paramArr, body[0]);
            } else {
                return new Function(body[0]);
            }
        } else {
            return null;
        }
    } else {
        return eval(funcString);
    }
}

// 复制 除了 Map、Set、Array、Object、Arguments 之外的其他类型
function cloneOtherType(targe, type) {
    const Ctor = targe.constructor;
    switch (type) {
      // 这里是为了处理经过包装的基本类型：
      // 如 new Number(123)、new String('xxxx')等，
      // 经过包装后基础类型转为了Object类型
      case boolTag:
      case numberTag:
      case stringTag:
      case errorTag:
      case dateTag: // 时间对象
          return new Ctor(targe);
      case regexpTag: // 正则
          return cloneReg(targe);
      case symbolTag: // Symbol
          return cloneSymbol(targe);
      case funcTag:  // 函数
          return cloneFunction(targe);
      default:
          return null;
    }
}

function clone(target, map = new WeakMap()) {

    // 克隆原始类型
    if (!isObject(target)) {
        return target;
    }

    // 初始化
    const type = getType(target);
    let cloneTarget;

    // 复制 Map、Set、Array、Object、Arguments 类型 (可以继续遍历的类型)
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target, type);
    } else {  // 其他类型 （不可以继续遍历的类型） 
        return cloneOtherType(target, type);
    }

    // 防止循环引用
    if (map.get(target)) {
      return target;
    }
    map.set(target, cloneTarget);

    // 克隆set
    if (type === setTag) {
        target.forEach(value => {
            cloneTarget.add(clone(value));
        });
        return cloneTarget;
    }

    // 克隆map
    if (type === mapTag) {
        target.forEach((value, key) => {
            cloneTarget.set(key, clone(value));
        });
        return cloneTarget;
    }

    // 克隆对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target);

    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value;
        }
        cloneTarget[key] = clone(target[key], map);
    });

    return cloneTarget;
}

const aaa = {
  a:1, 
  b: {
    a: 1
  }
}
// const bbb = clone(aaa)
// console.log(bbb)
// console.log(aaa === bbb)

const s = Symbol(124)
const s1 = clone(s)
console.log(s)
console.log(s === s1)
console.log(s1)
console.log(typeof s1)


// 也是可以从两个方面来讲，一个走技术路线，一个走管理路线。


// 技术路线：

// 对自身已经掌握的技术持续精进，并通过技术手段去回馈团队和业务（如前端架构、异常监控、性能优化、指标体系等）
// 在某一个技术方向上做到突出，能够沉淀出相应方法论，并建设出系统性的平台，在部门及公司内部普及应用
// 保持对新技术的热情，持续扩宽技术广度，对团队的技术栈持续迭代，保持团队整体技术的竞争力



// 管理路线：

// 定目标 —— 包含业务支撑、技术成长和团队培养三部分
// 看执行 —— 主要是对现有流程的问题进行梳理，让过程更加规范化、流程化，同时需要发掘高潜，给其空间快速成长
// 拿结果 —— 需要有可量化的具体数据来作为结果的衡量依据

// 作者：Helianthuswhite
// 链接：https://juejin.cn/post/7298218459795734582
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// 最长递增子序列
// 跳跃游戏
// 跳跃游戏 II
// 子集
// 全排列
// 合并两个有序链表
// 合并区间
// 最长公共前缀
// 搜索插入位置
// 三数之和
// 字母异位词分组
