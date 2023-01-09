import './Home.css'
const Home = () => {
  return (
    <div className='wa3'>
    <section class="home container" id="home">
       
    <div class="home-text">
        <h1>explore<br />our perfect<br />houses</h1>
        <a href="sign-up.html" class="btn" id="aymen">Sign Up</a>
       
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
    </div>
     <div class="lower">
     <div class="hero-container">
  
    <input type="text" placeholder="write your state"/>
    <input type="date" placeholder="Start date"/>
    <input type="date" placeholder="end date"/>
    <button type="submit">Search</button>
  
</div>

    </div>
    

</section>
</div>
  )
}




export default Home