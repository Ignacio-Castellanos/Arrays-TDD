const list = ["Gandalf", "Pippin", "Frodo", "Merry", "Legolas", "Gimli"];

function eliminateDuplicate (array){

for(var i=0; i<array.lenght; ++i) {
    for(var j=i+1; j<array.lenght; ++j)
      if(array[i] === array[j])
        array.splice(j--, 1);


}

return array;

}

console.log (eliminateDuplicate (list))

module.exports = eliminateDuplicate
