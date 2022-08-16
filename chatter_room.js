const firebaseConfig = {
      apiKey: "AIzaSyASuQgiI4dv7EEUp2mwUNW3dWME8waqyYo",
      authDomain: "chatter-cc000.firebaseapp.com",
      databaseURL: "https://chatter-cc000-default-rtdb.firebaseio.com",
      projectId: "chatter-cc000",
      storageBucket: "chatter-cc000.appspot.com",
      messagingSenderId: "872350380818",
      appId: "1:872350380818:web:2806d71ec1813497ce39cb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var user_name= localStorage.getItem("user_name");
    console.log(user_name)
    document.getElementById("user_name").innerHTML="Welcome "+user_name;

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update(
            {
                  purpose:"adding room name"
            }
      );

      localStorage.setItem("room_name", room_name);


      window.location="chatter_page.html";
    }




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room-"+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{

   console.log(name)
   localStorage.setItem("room_name",name);
   window.location="chatter_page.html";   
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}