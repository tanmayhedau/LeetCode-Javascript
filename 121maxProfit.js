function Maxprofit(arr) {
    let minPrice = arr[0];
    let maxProfit = 0;
    for(let i=0; i<arr.length; i++) {
        minPrice = Math.min(minPrice, arr[i]);
        let profit = arr[i] - minPrice;
        maxProfit = Math.max(maxProfit, profit);
    }
    return maxProfit;
}

console.warn(Maxprofit([7,1,3,5,6,4]))