const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    /* 
    Istifadəçinin daxil etdiyi dəyişəni qəbul edirik. 
    Giriş veriləni String type olur. Riyazi əməliyyatları tətbiq etmək üçün parseInt() metodundan istifadə edərək Number type-a çevrilməlidir.
    */
    let a = parseInt(result.input); // 9
    let f = parseInt(a/100);
    let m = parseInt(a/10)%10;
    let l = a %10;

    if (f>m && f>l && m>l){
        console.log(Number(`${f}${m}${l}`)*Number(`${f}${m}${l}`)) //fml
    }else if (l > m && l> f && m> f){
        console.log(Number(`${l}${m}${f}`)*Number(`${l}${m}${f}`)) //lmf
    }else if (l > m && l> f && m< f){
        console.log(Number(`${l}${f}${m}`)*Number(`${l}${f}${m}`)) // lfm
    }else if (m>l && m>f && l< f){
        console.log(Number(`${m}${f}${l}`)*Number(`${m}${f}${l}`))} // mfl
});
