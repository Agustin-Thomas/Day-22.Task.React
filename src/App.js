
import './App.css';
import './Card';
import Card from './Card';
function App() {
  const planDetails =[{
  planName:"Free",
  price :"0",
  user : "Single User",
  storage : "5GB Storage",
  features:[
  {name: "Unlimited Public Project",
   enable: true},
  {name: "Community Access",
  enable:true},
  {name:"Unlimited private Project",
  enable:false},
 {name: "Dedicated Phone Support",
 enable:false},
  {name:"Free Subdomain",
  enable:false},
  {name:"Monthly Status Report",
  enable:false}
]
  },
  {
    planName:"Plus",
    price :"9",
    user : "5 Users",
    storage : "50GB Storage",
    features:[
      {name: "Unlimited Public Project",
       enable: true},
      {name: "Community Access",
      enable:true},
      {name:"Unlimited private Project",
      enable:true},
     {name: "Dedicated Phone Support",
     enable:true},
      {name:"Free Subdomain",
      enable:true},
      {name:"Monthly Status Report",
      enable:false}
    ]
    },
    {
      planName:"Pro",
      price :"49",
      user : "Unlimited Users",
      storage : "50GB Storage",
      features:[
        {name: "Unlimited Public Project",
         enable: true},
        {name: "Community Access",
        enable:true},
        {name:"Unlimited private Project",
        enable:true},
       {name: "Dedicated Phone Support",
       enable:true},
        {name:"Free Subdomain",
        enable:true},
        {name:"Monthly Status Report",
        enable:true}
      ]
      }]
  return (
    <div>
     
     <section class="pricing py-5">
       <div class="container">
        <h1 className='text-center'>Price-Card</h1>
          <div class="row">
            {
          planDetails.map((detail)=>{
            return <Card details={detail}></Card>
          })
          }
          </div>
       </div>
       
    </section>
    </div>
  );
}

export default App;
