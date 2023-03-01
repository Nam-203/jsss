//  Object contructor
// function Anu(name,age,adrres){
//     this.aa=name;
//     this.bb=age;
//    this.cc=adrres;
// // gan đôi tuogw cho tham sso chuyên vao
// }
// var anucc = new Anu('lo',12,'bui chua que thoi');
// anucc.concac='lon ong manh';
// console.log(anucc)
// // function abc(x){
// //     if(x==0 || x<=9){
// //         alert('anh yêu em ');
// //     }
// //     else if(x==10|| x<=20){
// //         alert ('lồn em nứng quá')
// //     }
// // }
// // var result=${abc};


// function Giang(nung,lon){
//     this.nung=nung;
//     this.lon=lon;
// }
// Giang.prototype.getBuomthom=function(){
//     return `${this.nung} ${this.lon}`
// }
// var nunglon= new Giang('anh oi','em nung lon qua');

// console.log(nunglon); &&
// console.log(nunglon.nung);
// console.log(nunglon.lon);

// console.log(nunglon.getBuomthom());


// // var lon=prompt();
// // var inc = lon*100
// // print (inc)*100
//   var giang = prompt();
//   if (giang>=90 && giang<100) {
//     alert('thương chứ yêu ít')
    
//   }else if ( giang ==100){
//     alert( 'yêu nammm 1000')
//   }



const huy = {
  name : 'huy db',
  age :19,
};
  for ( const print of Object.keys ( huy)){
    console.log(print);
  }