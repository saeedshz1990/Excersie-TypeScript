let a;
let b = 10;
let c = 'Hello';
let d: string;
let e: boolean;
let f: number = 85.5;
let g = false;
let h: null = null;
let i: any;
let j = [1, 2, 'hello'];
let k: number[] = [1, 2, 4];
let l: Array<number> = [1, 2, 3, 4, 5, 6, 7, 85];
let m: Array<any> = [false, 1, 2, 3, 'hello'];
let n: [string, number, boolean] = ['hi', 80, true];//tuple
//object
let o = {name: 'Saeed', age: 30, id: 1, city: 'vancouver'};


console.log();
j.push('Hi');
k.push(78);
console.log(a);
console.log(typeof (f));
console.log(Boolean(undefined));
console.log(Boolean(null));


//boolean can not + in number
// let z = b + g;

//null || undefined != '';
//null || undefined != false;
//null || undefined != 0;

// console.log(8 - 'hello');//NAN
console.log(2 / 0);//infinity
console.log(-2 / 0);//infinity
console.log(-2 / 0);//infinity
i = 18;
i = 'hello';