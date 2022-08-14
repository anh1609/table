//baif 1 
function exam1(){
    var count=0;
    for(i=1;i<=100;i++){
        if(i%3==0 || i%7==0){
            count++;
        }
    }
    // console.log(count);

}
 exam1();
// bai 2
 function exam2(){
    var sum=0;
    var n=prompt("mơi bạn nhập số");
    var i=1;
     do{
        sum+=i;
        i++;
     }
    while(i<=n);
    // console.log(sum) 
}

//  exam2();

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
    // console.log(S)

}
// exam3()

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
    // console.log(sum);
}
// exam4()

// bai 5
function exxam5(){
    var n=prompt("nhap n");
    var sum=0;
    for(i=1;i<=n;i++){
        if(i>0){
            sum+=1/i;
        }
    }
    // document.write("toong la: ",sum);
    
}
// exxam5()


// bai 6
function exam6(){
    var i=0;
    var sum = 0;
    while(i<=30){
        if(i%2==0 && i<=20){
            sum+=i;
        }else{
            console.log("")
        }
        i++;
    }
    console.log(sum)
    
}
exam6()