function exam6(){
    var i=0;
    var sum = 0;
    while(i<=30){
        if(i%2==0 && i<20){
            sum+=i;
        }else{
           document.write(" ");
        }
        i++;
    }
    document.write("tổng của 10 số chẵn đầu tiên là :" ,sum);
    
}
exam6()