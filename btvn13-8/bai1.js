//baif 1 
function exam1(){
    var count=0;
    for(i=1;i<=100;i++){
        if(i%3==0 || i%7==0){
            count++;
        }
    }
     document.write("số lượng các só nguyên chia hết cho 3 hoặc 7 là :",count);

}
 exam1();