import './Rayek.css'
import React from 'react'

const Rayek = () => {
  return (
    <div>
 
  <h1>House Rent Offers</h1>
  <div class="offers">
    <div class="offer">
      <div class="offer-title">3 bedroom house in downtown</div>
      <div class="offer-details">
        <div>2 bathrooms</div>
        <div>1,500 sq. ft.</div>
        <div class="offer-price">$1,500/month</div>
      </div> 
      <form>
        <input type="radio" name="reaction" value="like"/> Like< br/>
        <input type="radio" name="reaction" value="dislike"/> Dislike< br/>
      </form>
      <form>
        <label for="comment">Leave a comment:</label>< br/>
        <textarea id="comment" name="comment" rows="5" cols="50"></textarea>< br/>
        <input type="submit" value="Submit"/>
      </form>
      <div class="comments">
        <div class="comment">
          <div class="comment-author">John</div>
          <div class="comment-date">Jan 1, 2020</div>
          <div>This looks like a great deal!</div>
        </div> 
        <div class="comment">
          <div class="comment-author">Jane</div>
          <div class="comment-date">Jan 2, 2020</div>
          <div>I'm not sure about the location.</div>
        </div>
      </div>
      </div>
      <div class="offer-info">
        <div name="contact">
            <label for="name">Name:</label>< br/>
            <input type="text" id="name" name="name" />< br/>
            <label for="email">Email:</label>< br/>
            <input type="email" id="email" name="email" />< br/>
            <label for="phone">Phone:</label>< br/>
            <input type="tel" id="phone" name="phone"/>< br/>
            <label for="message">Message:</label>< br/>
            <textarea id="message" name="message" rows="5" cols="50"></textarea>< br/>
            <button type="submit">Send</button>
          
    
    </div>
    </div>
    </div>
    </div>
    


  )
}

export default Rayek
