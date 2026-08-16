/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0, maxProfit = 0, minValue = prices[0], i = 0;
    while (i < prices.length) {
        if (prices[i] < minValue) {
            minValue = prices[i];
        }
        profit = prices[i] - minValue;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
        i++;
    }

    return maxProfit;

};