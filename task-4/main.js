const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    let a = parseInt(result.input); // 9
    let n = 0; 

    for(let i = 1;i<a;i++){
        if (a%i===0 && i%2!==0){
            console.log(i)
        }
    };
});
