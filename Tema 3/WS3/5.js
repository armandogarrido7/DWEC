function saddlePoint(arr){
    saddle_points = [];
for (i=0; i<arr.length;i++){
    for (j=0; j<arr.length; j++){
        highest_in_row = true;
        lowest_in_column = true;
        for (k=0; k<arr.length;k++){
            highest_in_row *= arr[i][j] >= arr[i][k];
        }
        for (k=0; k<arr.length;k++){
            lowest_in_column *= arr[i][j] <= arr[k][j];
        }
        if (highest_in_row && lowest_in_column)
            saddle_points.push(arr[i][j])
    }
}
return saddle_points;
}

array = [
    [1,1,1,8,1],
    [1,1,1,3,1],
    [1,1,1,9,1],
    [1,1,1,2,1],
    [1,1,1,11,1],
]
document.write(saddlePoint(array));