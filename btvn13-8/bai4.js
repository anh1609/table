// bai 4
function exam4(){
    var n = prompt("nhap n");
    var m = prompt("nhap m");
    var k = prompt("nhap k");
    var sum= 0;
    for(;n<=m;n++){
        if(n%k==0){
            sum+=n;
        }
    }
    document.write("tổng các số chia hết cho k trong khoảng từ M đến N là:",sum);
}
 exam4()
