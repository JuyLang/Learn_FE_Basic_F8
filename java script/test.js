
let newstr = []
let str = '01001011 01010011 01111011 0001 01010100 00100111 0101 01011111 01100001 01011111 01101101 0001 01111000 01011111 0000 01100110 01011111 01000010 0001 01001110 01000001 01010010 01011001 01011111 00100110 01011111 0110 01011111 01000010 01000011 01000100 01111101';


newstr= str.split(" ").join("");
let tes ="KswknightsquaitxknightsquaisxnknKnightsquaeithknightsquaerxnknightsquaicknightsquaexjknightsquaavknightsquaaxknightsquaavknightsquaaxnightsquaexknightsquaisquasquaaissquaavnightsquasquasquaaissquaavnightsqua"
let tes2
let tes3
tes2 = tes.replace(/w/g, '{')
tes3 = tes2.replace(/x/g, '_')
// tes2.replace("x","_")
let tes4 = tes3.replace(/knightsqua/g,'') 
// let tes5 = tes4.replace(/nkn/g,'')
// KNIGHTSQUAD
console.log(tes2)
console.log(tes3)
console.log(tes4)
// console.log(tes5)