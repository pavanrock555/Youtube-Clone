export const API_KEY='AIzaSyDwioLJbH3l9W31RZjT64Ptgh5OCnIy0lE';

//AIzaSyCgRSRpd-LrVXhzFuslhYNfVUJ3PQQINWo}1

//IzaSyBJieNjxkzfkk7vgyBDwcwLrGIn5pQwybU 2

//{`side-link ${category===0?active:""}`}  onClick={()=>{setCategory(0)}}

/*.side-link.active img{
    padding: 2px;
    border-bottom: 3px solid red;
} */

 export   const value_converter=(value)=>
    {
if(value>=1000000){
    return Math.floor(value/1000000)+"M";
}
else if(value>=1000){
    return Math.floor(value/1000)+"K";
}
else{
    return value;
}
    }