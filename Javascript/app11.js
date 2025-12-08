var beatles = [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr",
];
function printNames(names) {
  function actuallyPrintNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index]; //current name
      console.log(name + "was found at index " + index);
    }
    console.log(" names and index after the loop are " + name + ":" + index);
  }
  actuallyPrintNames();
}

printNames(beatles);
