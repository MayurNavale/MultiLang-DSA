// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {


    const minprice = Math.min(...prices);
    let profit = 0;
    let maxpriceIndex = 0
    prices.forEach((val, index) => {
        if (val == minprice) {
            maxpriceIndex = index;
        }
        if(val > prices[maxpriceIndex]){
            maxpriceIndex = index
        }
    });

    return prices[maxpriceIndex] - minprice
};