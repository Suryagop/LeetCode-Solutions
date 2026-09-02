/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let ans = [];
    for (let i = 0; i < intervals.length; i++) {
        let cur = intervals[i] //[]
        let prev = ans[ans.length - 1];
        if (ans.length == 0 || prev[1] < cur[0]) {  //Empty array and Non overlapping case
            ans.push(cur);
        }
        else {         //Overlapping case
            ans[ans.length - 1][1] = Math.max(prev[1], cur[1]);
        }
    }
    return ans
};