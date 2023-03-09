const randomData= () =>{
    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(data=>displayRandom(data))
}
const displayRandom=user =>{
 const userName=document.getElementById('name');
 const userGender=document.getElementById('gender')
 const userLocation=document.getElementById('location')
//  const userImage=document.getElementById('image')
 userName.innerHTML=user.results[0].name.first
 userGender.innerHTML=user.results[0].gender
 userLocation.innerHTML=user.results[0].location.city
//  userImage.innerHTML=user.results[0].picturs.large

}

randomData()