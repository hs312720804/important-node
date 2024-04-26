// https://blog.csdn.net/guorui_java/article/details/138142243
console.log(minInitialFuel(2,2, [[10,20], [30,40]]))

// 函数用于计算从地图的左上角到右下角所需的最少初始油量
function minInitialFuel(M, N, grid) {
    // 如果起点或终点是障碍物，直接返回-1
    if (grid[0][0] == 0 || grid[M - 1][N - 1] == 0) {
        return -1;
    }

    // 创建一个数组用来存储到达每个点的最小初始油量
    let minOil = new Array(M).fill(0).map(() => new Array(N).fill(Infinity))
    // 起点的最小初始油量，如果起点是加油站，则为0，否则为格子上的数值
    minOil[0][0] = grid[0][0] > 0 ? grid[0][0] : 0;

    // 方向数组，表示上下左右四个移动方向
    let dx = [0, 1, 0, -1]
    let dy = [1, 0, -1, 0];

    // 使用优先队列按照已消耗的油量排序，确保总是先处理需要油量最少的路径
    // PriorityQueue<let[]> queue = new PriorityQueue<>(Comparator.comparinglet(a -> a[2]));
    let queue = []
    queue.unshift([0, 0, minOil[0][0]]); // 起始位置入队

    // 广度优先搜索
    while (queue.length !== 0) {
        let current = queue.shift(); // 取出队列中油耗最少的状态
       
        let [x, y, oilUse] = [...current]
        
        // 到达终点，返回所需的最小初始油量
        if (x == M - 1 && y == N - 1) {
            return oilUse;
        }

        // 探索四个可能的移动方向
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i]; // 新的行坐标
            let ny = y + dy[i]; // 新的列坐标

            // 确保新坐标在地图范围内，并且不是障碍物
            if (nx >= 0 && nx < M && ny >= 0 && ny < N && grid[nx][ny] != 0) {
                // 计算到新位置的所需油量
                let requiredFuel = oilUse + (grid[nx][ny] > 0 ? grid[nx][ny] : 0);
                // 如果到达加油站，则可以将油量补满至100或保持原油量中的较小值
                if (grid[nx][ny] == -1) {
                    requiredFuel = Math.min(oilUse, 100);
                }
                // 如果找到更少油耗的路径到达(nx, ny)，则更新minFuel并将状态入队
                if (requiredFuel < minOil[nx][ny]) {
                    minOil[nx][ny] = requiredFuel;
                    queue.unshift([nx, ny, requiredFuel]);
                    queue.sort((a,b) => a[2] - b[2])
                }
            }
        }
    }

    // 如果所有可能的路径都被探索后仍无法到达终点，返回-1
    return -1;
}

