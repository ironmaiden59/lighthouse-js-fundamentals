/* 
x++ or ++x // same as x = x + 1 
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x*  2
x /= 5 // same as x = x / 5
*/

for (let i = 100; i < 200; i++) {
    if (i % 3 === 0 && i % 5 === 0) return "LoopyLighthouse";
    if (i % 3 === 0) return "Loopy";
    if (i % 5 === 0) return "Lighthouse";
}

