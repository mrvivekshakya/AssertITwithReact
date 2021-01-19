/* Typing animation */
var multiContent = (first,second,third) => {
    var values = [];
    values.push(first);
    values.push(second);
    values.push(third);

    var i=0;
    while(i<values.length){
        var current = values[i];
        var j = 0;
        while(j<current.length){
            var cPrint = () => {
                console.log(current[j]);
            }
            setInterval(cPrint(),5000);
            // cPrint();
            //console.log(current[j])
            // setInterval(function(){
            //     console.log(current[j])
            //     document.getElementById('multi').innerHTML = current[j];
            //     //document.getElementById('multi').innerHTML += current[j];
            // },1000);
            j++;
        }
        i++;
    }
    // console.log(values[0])
    // setInterval(function(){
    //     console.log(first[0]);
    // },2000);
}
document.addEventListener('load',multiContent("branding","marketing","designing"));