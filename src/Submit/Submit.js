import React from 'react'
import './Submit.css'

const Submit = () => {
  return (<div className='hello'>
   
    <div class="baha">
    <div class="row"> <span class="heading">user Rating</span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star checked"></span>
    <span class="fa fa-star"></span>
    <p>4.1 average based on 254 reviews.</p>
      <div class="side">
        <div>5 star</div>
      </div>
      <div class="middle">
        <div class="bar-container">
          <div class="bar-5"></div>
        </div>
      </div>
      <div class="side right">
        <div>150</div>
      </div>
      <div class="side">
        <div>4 star</div>
      </div>
      <div class="middle">
        <div class="bar-container">
          <div class="bar-4"></div>
        </div>
      </div>
      <div class="side right">
        <div>63</div>
      </div>
      <div class="side">
        <div>3 star</div>
      </div>
      <div class="middle">
        <div class="bar-container">
          <div class="bar-3"></div>
        </div>
      </div>
      <div class="side right">
        <div>15</div>
      </div>
      <div class="side">
        <div>2 star</div>
      </div>
      <div class="middle">
        <div class="bar-container">
          <div class="bar-2"></div>
        </div>
      </div>
      <div class="side right">
        <div>6</div>
      </div>
      <div class="side">
        <div>1 star</div>
      </div>
      <div class="middle">
        <div class="bar-container">
          <div class="bar-1"></div>
        </div>
      </div>
      <div class="side right">
        <div>20</div>
      </div>
    </div>

    <div id='rf'> <p id='textr'> give us your review </p>
        
        <p class='texto'><label for="name">name:</label></p>
                  <input type="text" id="name" placeholder='name' />  
        <p class='texto'><label for="cmnt">comment:</label></p>
<p><textarea id="cmnt" name="story"
          rows="5" cols="33" >
</textarea></p>
<a href="sign-up.html" class="btn">send    </a>

        </div>
</div>
</div>
  )
}

export default Submit