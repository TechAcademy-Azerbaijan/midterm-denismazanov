const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    let a = parseInt(result.input); // 9
    let a = 23;
    let sum = 0;

    while(a>0){
        sum +=a%10;
        a = parseInt(a/10)
    }
    console.log(sum);
});
