//If you require Polyfills, Async, await, Etc uncomment below line. Be mindful, bloats the bundle!.
import '@babel/polyfill';
import { ExposeModule } from "bms-expose-module";

import Product from '../classes/Product';

const test = async(testVar) => {
  console.log("hello from bundle UPDATED!!!again!!");
  const product = new Product("IamProductHandle", 1223);


  console.log(product.handle);
  console.log(product.id);
  console.log(Product.staticVariable);
  console.log("testVar is ", testVar);
  
  sleep(3000).then(()=> {
    console.log("sleepttt")
  });
  try{
    await asyncSleep(2000);
    console.log("slept 2000");
  }
  catch(e){console.log(e)}
};

const anotherModule = () => {
  console.log('hello from ANOTHER MODULE!!!');
}

const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{resolve()},time);
  });
}

const asyncSleep = async(time) => {
  await sleep(time);
};

console.log('hi');


ExposeModule({BOLD:{BMS:{BUILDS:{test:test}}}});
ExposeModule({BOLD:{BMS:{BUILDS:{anotherModule:anotherModule}}}});
