// Your web app's Firebase configuration
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
  var username = document.getElementById('username').value
  var age = document.getElementById('age').value
  var gender = document.getElementById('gender').value
  var blood = document.getElementById('blood').value
  var Allergies = document.getElementById('Allergies').value
  var Surgeries = document.getElementById('Surgeries').value
  var lab = document.getElementById('lab').value
  var pastp = document.getElementById('pastp').value

  database.ref('users/' + username).set({
    username : username,
    age : age,
    gender : gender,
    blood : blood,
    Allergies : Allergies,
    Surgeries : Surgeries,
    lab : lab,
    Pastpric : pastp
  })
}

