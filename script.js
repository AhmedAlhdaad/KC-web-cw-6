alert("مرحباً بك في موقعي الذي سيحسب درجتك!");

let grade=prompt("اكتب درجتك بالأرقام");

console.log( grade);

if (grade >= 90) {
    console.log(  "%cلقد حصلت على امتياز 🥳"  , 'color : red ; font-wieght: bold; font-size: 20px' );
} else if (grade >= 80) {
    console.log("%cلقد حصلت على جيد جداً🤩"  , 'color : red ; font-wieght: bold; font-size: 20px');
} else if(grade >= 70) {
    console.log(" %c لقد حصلت على جيد🙂"  , 'color : red ; font-wieght: bold; font-size: 20px');
} else if (grade >= 60) {
    console.log("%Cلقد حصلت على مقبول😕"  , 'color : red ; font-wieght: bold; font-size: 20px');
} else if (grade >=50 ) {
    console.log("%cلقد حصلت على ضعيف☹️" , 'color : red ; font-wieght: bold; font-size: 20px');
} else {
    console.log("%cراسب💔"  , 'color : red ; font-wieght: bold; font-size: 20px');
}

//this is coment//
