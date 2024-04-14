

const firebaseConfig = {
    apiKey: "AIzaSyCrVJuPn4R5pZuWDSZ-Vxsbeb4wUAjIs4Y",
    authDomain: "medsafe-9cb27.firebaseapp.com",
    databaseURL: "https://medsafe-9cb27-default-rtdb.firebaseio.com",
    projectId: "medsafe-9cb27",
    storageBucket: "medsafe-9cb27.appspot.com",
    messagingSenderId: "165007669905",
    appId: "1:165007669905:web:9d625d1afde88e51fd1d30",
    measurementId: "G-J1DTJ5TQ4X"
    };
firebase.initializeApp(firebaseConfig);


var database = firebase.database()
var username = "BAJAJ"
function get() {
// var username = document.getElementById('username').value;

// Assuming you've initialized Firebase and have a 'database' variable
var user_ref = firebase.database().ref('users/' + username);
user_ref.on('value', function(snapshot) {
    var data = snapshot.val();
    // Do something with the data, like displaying it
    document.getElementById("agedata").innerHTML = "Age : "+data.age;
    document.getElementById("username").innerHTML = data.username;
    document.getElementById("gender").innerHTML = "Gender : "+data.gender;
    document.getElementById("blood").innerHTML = "Blood Group : "+data.blood;
    document.getElementById("aly").innerHTML = "Allergies : "+data.allergies;
    document.getElementById("past").innerHTML = "Past reports : "+data.Pastpric;
    document.getElementById("lab").innerHTML = "Lab reports : "+data.lab;
    document.getElementById("bigname").innerHTML = data.username;


}, function(error) {
    console.error("Error fetching data:", error);
});
}
get()

