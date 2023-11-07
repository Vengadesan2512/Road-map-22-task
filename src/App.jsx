
import './App.css'

function App() {
  

  return (
  <div className='app'><PriceCard/>
  <PriceCard2/>
  <PriceCard3/>
  </div>
  )
}

export default App
function PriceCard(){
  return(
   <div className='card-design'>
    <div>
      <h5 className='opa-city'>Free</h5>
      <h1>$ 0/month</h1>
      <p>single user</p>
        <p>50 GB Storage</p>
          <p className='opa-city'>Unlimited Public-Project</p>
            <p className='opa-city'>Community Acess</p>
              <p className='opa-city'>unlimited private project</p>
                <p className='opa-city'>Dedicated Phone Support</p>
                  <p className='opa-city'>Free Subdomain</p>
                  <p className='opa-city'>Monthly status Reports</p>
                  <button className='btn'>Subscribe</button>
    </div>
   </div>
 )
}
function PriceCard2(){
  return(
   <div className='card-desig-2'>
    <div>
      <h5 className='opa-city'>Plus</h5>
      <h1>$ 9/month</h1>
      <p>single user</p>
        <p>50 GB Storage</p>
          <p>Unlimited Public-Project</p>
            <p>Community Acess</p>
              <p>unlimited private project</p>
                <p>Dedicated Phone Support</p>
                  <p>Free Subdomain</p>
                  <p className='opa-city'>Monthly status Reports</p>
                   <button className='btn'>Subscribe</button>
    </div>
   </div>
 )
}
function PriceCard3(){
  return(
   <div className='card-desig-3'>
    <div>
      <h5 className='opa-city'>Pro</h5>
      <h1>$ 49/month</h1>
      <p>single user</p>
        <p>50 GB Storage</p>
          <p>Unlimited Public-Project</p>
            <p>Community Acess</p>
              <p>unlimited private project</p>
                <p>Dedicated Phone Support</p>
                  <p>Free Subdomain</p>
                  <p>Monthly status Reports</p>
                   <button className='btn'>Subscribe</button>
    </div>
   </div>
 )
}