

let x = +prompt('Введите число х')
let y = +prompt('Введите число у')

if(x > 0 && y > 0){
    console.log(`точка находится в первой четверти`)
}else if(x < 0 && y < 0){
    console.log(`точка находится в третьей четверти`)
}else if(x > 0 && y < 0){
    console.log(`точка находится в четвертой четверти`)
}else if(x < 0 && y > 0){
    console.log(`точка находится во второй четверти`)
}else if(x == 0 || y == 0 ){
    console.log(`точка на оси `)
}else{
    console.log('error')
}














