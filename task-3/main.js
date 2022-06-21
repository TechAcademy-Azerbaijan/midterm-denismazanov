const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    let k = parseInt(result.input); // 9
    let m =0;
    let check = true
    while(k>0){
        m = k%10;
        k=parseInt(k/10)
        let a = k;
        let n = 0;

        while(a>0){
            n = a%10;
            a=parseInt(a/10);
            if(m==n){
                check = true;
                break
            }else{
                check = false
            }
            //console.log(m,n)
        }
        break

    }
    if(check){
        console.log("yes")
    }else{
        console.log("no")
    };
});
