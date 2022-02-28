var Name = [
    {
        id : 1,
        coin : 250,
        Ten : 'Duy'
    },
    {
        id : 2,
        coin : 0,
        Ten : 'Duy'
    },
    {
        id : 3,
        coin : 200,
        Ten : 'Duy'
    },
    

];

var toCoin = Name.reduce(function(Luutru, Dem){
    console.log(Dem);
    return Luutru + Dem.coin;
    
}, 0);

