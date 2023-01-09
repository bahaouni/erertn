import './Proporti.css'
import pop1 from '../images/1.jpg'
import pop2 from '../images/2.jpg'
import pop3 from '../images/3.jpg'
import pop4 from '../images/4.jpg'
import pop5 from '../images/5.jpg'
import pop6 from '../images/6.jpg'
import Components from '../components/Components'

const Proporti = () => {
  return (
    <div className='wa4'>
    <section class="properties container" id="properties">
    <div class="heading">
        <span >Recent</span>

        <h2>Our Featured Properties</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, laborum!</p>
    </div>
    <div class="properties-container container">
       
      <Components img ={pop1} price='900Dt' place='Tunis' />
      
        <div class="box">
            <img src={pop2} alt=""/>
            <h3>500 DT</h3>
            <div class="content">
                <div class="text">
                    <h3> Nabeul</h3>
                    <p>AFH Mrezga</p>
                </div>
                <div class="icon">
                    <i class="bx bx-bed"><span>s+1</span></i>
                    <i class="bx bx-bath"><span>meublé</span></i>
                </div>
            </div>
        </div>
        
        <div class="box">
            <img src={pop3} alt=""/>
            <h3>400DT</h3>
            <div class="content">
                <div class="text">
                    <h3>Sousse</h3>
                    <p>Sousse Ville</p>
                </div>
                <div class="icon">
                    <i class="bx bx-bed"><span>s+1</span></i>
                    <i class="bx bx-bath"><span>meublé</span></i>
                </div>
            </div>
        </div>
      
        <div class="box">
            <img src={pop4}alt=""/>
            <h3>700DT</h3>
            <div class="content">
                <div class="text">
                    <h3>Tunis</h3>
                    <p>Ariana</p>
                </div>
                <div class="icon">
                    <i class="bx bx-bed"><span>s+2</span></i>
                    <i class="bx bx-bath"><span>meublé</span></i>
                </div>
            </div>
        </div>
        
        <div class="box">
            <img src={pop5} alt=""/>
            <h3>450DT</h3>
            <div class="content">
                <div class="text">
                    <h3>Sousse</h3>
                    <p>Sahloul</p>
                </div>
                <div class="icon">
                    <i class="bx bx-bed"><span>s+2</span></i>
                    <i class="bx bx-bath"><span>meublé</span></i>
                </div>
            </div>
        </div>
       
        <div class="box">
            <img src={pop6} alt=""/>
            <h3>500DT</h3>
            <div class="content">
                <div class="text">
                    <h3>Mahdia</h3>
                    <p>Mahdia</p>
                </div>
                <div class="icon">
                    <i class="bx bx-bed"><span>s+2</span></i>
                    <i class="bx bx-bath"><span>meublé</span></i>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
        )
        }

        export default Proporti;
      
