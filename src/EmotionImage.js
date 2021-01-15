export default function EmotionImage(props) {

    //image links for emotions
    const [happy,frustrated,enthusiastic] = [
     "https://hullandhull.com/wp-content/uploads/2020/06/smiley-10994882.jpg",
     "https://i.pinimg.com/originals/56/92/d0/5692d096777213a7f713c9841ba04a66.png",
     "https://i.pinimg.com/originals/5f/a5/5e/5fa55e360137cbbc9714320ff8492d64.jpg"
   ]
   switch (props.imageFor) {    
     case "frustrated":
       return <img src={frustrated} height="300" alt="frustated face"></img>
     case "enthusiastic":
           return <img src={enthusiastic} height="300" alt="enthusiastic face"></img>  
     default:
       return <img src={happy} height="300" alt="happy face"></img>
   }
 }