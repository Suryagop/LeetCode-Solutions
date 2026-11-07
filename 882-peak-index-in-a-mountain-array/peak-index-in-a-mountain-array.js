/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start=0, end=arr.length-1;
    while(start<end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid]<arr[mid+1]){
            start=mid+1;
        }
        else{
            end=mid;
        }
    }
    //Iteration stops when only one element is left ie; start & end points to same element 
    // hence there is no need for furthur comparison and return the answer.
    return start; //OR return end;
};