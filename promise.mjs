/* eslint-disable no-undef */
// import axios from 'axios';

// const obj = {
//   foo: 'foo', // свойство объекта
//   doFoo() { // метод объекта
//     console.log(this.foo);
//   }
// };

// obj.foo = 'bar';

// console.log(obj.foo);
// console.log(obj.doFoo);

// class MyClass {
//   constructor() {
//     this.foo = 'foo';
//   }

//   doFoo() {
//     console.log(this.foo);
//   }
// }

// const myClass = new MyClass();
// const myClass2 = new MyClass();

// console.log(myClass.foo);
// console.log(myClass.doFoo());

const STATE_PENDING = 'pending';
const STATE_FULLFILLED = 'fullfilled';
const STATE_REJECTED = 'rejected';
//создать класс
class MyPromise {
  // конструктор вызывается когда создается экземпляр класса
  constructor(handler) {  // handler-обработчик
    this.state = STATE_PENDING;
    this.onFullfilledCallback = null;
    this.onRejectedCallback = null;

    const resolve = (value) => {
      if (this.state === STATE_PENDING) {
        this.state = STATE_FULLFILLED;
        this.onFullfilledCallback(value);
      }
    };

    const reject = (error) => {
      if (this.state === STATE_PENDING) {
        this.state = STATE_REJECTED;
        this.onRejectedCallback(error);
      }
    };

    handler(resolve, reject);
  }

  // тогда я запускаю что-нибудь
  then(onFullfilled) {
    if (this.state === STATE_PENDING) {
      this.onFullfilledCallback = onFullfilled;
    }

    return this;
  }

  // ловлю ошибку
  catch(onRejected) {
    if (this.state === STATE_PENDING) {
      this.onRejectedCallback = onRejected;
    }

    return this;
  }
}

const handler = (resolve, reject) => {
  setTimeout(() => {
    resolve('Resolved');
  }, 3000);
};
const myPromise = new MyPromise(handler);

const myPromise2 = axios.get().then((1)).catch((error) => error);

myPromise.then((value) => {
  console.log(value);
});

myPromise2.then((value) => {
  console.log(value);
}).catch((error) => console.log(error));


// new Promise((resolve, reject) => {
  // do smth
// });

// const promise = axios('https://dog.ceo/api/breeds/image/random');

// promise.then((data) => {
//   return data;
// }).catch((error) => {
//   return error;
// });

// async function doPromise() {
//   try {
//     const response = await promise;

//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// doPromise();
