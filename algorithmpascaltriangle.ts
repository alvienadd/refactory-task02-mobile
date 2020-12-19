//Algoritma Segitiga Pascal

// let prompts = require('prompts');

// let response = 10;
// let response=prompts{
//     type: 'text',
//     name: 'value',
//     message: 'Masukkan Nilai Ar?',
// }

var readline = require('readline-sync');
var ar=new Array();
let i,j;
 
var response = readline.question("Masukkan Nilai Ar(Wajib Angka Agar Tidak Error)?");

 for(i=1;i<=response;i++){  
    ar[i]=new Array();
    for(j=1;j<=i;j++){
        if(j==1||j==i){
            ar[i][j]=1;
        }else{
            ar[i][j]=ar[i-1][j-1]+ar[i-1][j];
        }
    }
 }

 for(i=1;i<=response;i++){
     for(j=1;j<=i;j++){
        console.log(ar[i][j]+'');
     }
        console.log("\n");
 }

//Notes:
//Running Cmd TypeScript: npx ts-node algorithmpascaltriangle.ts

//Hasil Cetakan Seharusnya dalam Bentuk Satu Garis..
//Berhubung JavaScript tidak dapat mencetak Satu Garis maka hasilnya Vertikal

//Hasil menggunakan input 10 (SUCCESS)
//1
//1 1
//1 2 1
//1 3 3 1
//1 4 6 4 1
//1 5 10 10 5 1
//1 6 15 20 15 6 1
//1 7 21 35 21 7 1
//1 8 28 56 70 56 28 8 1
//1 9 36 84 126 126 84 36 9 1

//HASIL BISA DIEKSEKUSI DENGAN BAIK TETAPI PERLU MENCANTUMKAN NODE MODULES DAN BERBAGAI MODULE TYPESCRIPT YANG PERLU DIINSTALL LAGI.
