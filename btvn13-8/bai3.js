// bai 3
function exam3(){
    var n=prompt("mời  bạn nhập số");
    var m =1 ,S=0;
    for(i=1;i<=n;i++){
        if(n>=0){
            m*=i;
            S+=i/m;
        }
    }
     document.write("tổng của S= ",S);

}
exam3()