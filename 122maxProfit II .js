function maxProfit (prices) {
    let maxprofit =0;
    for(let i=1; i<prices.length; i++) {
        if(prices[i] > prices[i-1]) {
            maxprofit += prices[i] - prices[i-1]
        }
    }
    return maxprofit
}

console.warn(maxProfit([7,1,5,3,6,4]))