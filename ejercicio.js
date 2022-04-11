
    function findElement(arr , n)
    {
        var prefixSum = Array(n).fill(0);
        prefixSum[0] = arr[0];
        
        for (i = 1; i < n; i++)
            prefixSum[i] = prefixSum[i - 1] + arr[i];
 
 
        var suffixSum = Array(n).fill(0);
        suffixSum[n - 1] = arr[n - 1];
        for (i = n - 2; i >= 0; i--)
            suffixSum[i] = suffixSum[i + 1] + arr[i];
 
        for (i = 1; i < n - 1; i++)
            if (prefixSum[i] == suffixSum[i])
                return arr[i];
 
        return -1;
    }
  
    var arr = [ 1, 4, 2, 5 ];
    var n = arr.length;
    console.log(findElement(arr, n));
 

 
