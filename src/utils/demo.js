function Father(name) {
  this.name = name || 'father';
  this.sleep = function () {
    console.log(this.name + '正在睡觉');
  };
}

Father.prototype.look = function (book) {
  console.log(this.name + '正在看' + book);
};

//1. 原型继承
/*

function Son() {}
Son.prototype = new Father();
Son.prototype.constructor = Son;
var son = new Son('dd');
son.sleep();
son.look('钢铁是怎么练成的');

缺点： 只执行一次，无法属性传值，可以方便继承原型中的方法

**/

//2.call 继承（构造继承）

/***
*

function Son2(name) {
  Father.call(this, name);
}
var son2 = new Son2('小明');
son2.sleep();
//son2.look('钢铁是怎么练成的'); // 报错 无法原型继承
// 优点：创建子类实例的时候可以向父类传递参数，可以实现多继承，方便继承属性。但是不能继承原型中的方法

*/

/**
 * 
//3 组合继承
function Son3(name) {
  Father.call(this, name);
}
Son3.prototype = new Father();

var son3 = new Son3('小白');
son3.sleep();
son3.look('傻瓜教程');

// 优点： 可以继承，可以传参
// 缺点： 调用了2次父类的构造函数

*/

// 寄生组合继承

// function Content(Obj) {
//   function F() {}
//   F.prototype = Obj;
//   return new F();
// }

// var con = Content(Father.prototype);

// function Son4(name) {
//   Father.call(this, name);
// }
// Son4.prototype = con;
// con.constructor = Son4;
// var son4 = new Son4('小黑');
// son4.look('sb');
// son4.sleep();

Promise.resolve()
  .then(() => {
    console.log(0);
  })
  .then(() => {
    console.log(4);
  });

Promise.resolve()
  .then(() => {
    console.log(1);
  })
  .then(() => {
    console.log(2);
  })
  .then(() => {
    console.log(3);
  })
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
