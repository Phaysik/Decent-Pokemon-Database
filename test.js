let data = [];
let id
function showUser() {
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = this.responseText;
            try {
                data = JSON.parse(data);
                const id = data[0][0];
                const name = data[0][1];
                const splitVal = data[0][2].split(' ');
                const types = [splitVal[0], splitVal[1]];
                console.log(data);
            } catch (ez) {
                console.log(ez)
            }
        }
    };
    xmlhttp.open("GET", "pkdata.php", true);
    xmlhttp.send();
}