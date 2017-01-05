/*
# Option 1

import * as f from './es05-export';

console.log("sum = ", f.sum(10, 20));
console.log("diff = ", f.diff(10, 20));

 */

import {sum, diff} from './es05-export';

console.log("sum = ", sum(10, 20));
console.log("diff = ", diff(10, 20));
