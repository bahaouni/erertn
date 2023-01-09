import './footer.css'
const Footer = () => {
  return (
<>
            <h1 class="a">Have Question in mind?<br/>Let us help you</h1>
            <br/>
            <br/>
            <form>
                <div className="letter">
                    <label htmlFor="mail"></label>
                    <input className="mail" type="email" name="mail" id="mail" placeholder="youremail@mail.com" required/><br/>
                    <textarea name="text" placeholder="Your Question" required ></textarea><br/>
                    <input type="submit" value="send" className="btnn" />
                </div>
            </form>
            <section className="footerr">
                <div className="foot">
                    <div className="erentn">
                        <h1>Erentn</h1>
                    </div>
                    <div className="local">
                        <h3>Locations</h3>
                        <h5>Sousse</h5>
                        <h5>Monastir</h5>
                        <h5>Tunis</h5>
                    </div>
                    <div className="contact">
                        <h1>contact</h1>
                        <p>+216 51 645 751</p>
                        <p>+216 71 646 518</p>
                        <p>mo7sen.tounsi@gmail.com</p>
                    </div>
                </div>
            </section>
            
        </>
  )
}

export default Footer
