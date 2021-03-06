import Styles from '../../styles/coupon/RenderCouponFestival';
import Pop from './PopUpCoupon';
import { Dialog, DialogContent } from '@material-ui/core'
import { useState } from 'react'
const temp = (props) =>{
    const [state, setState] = useState(false)
	const togglePop = () => {
		setState(true)
	}
    return(<div>
        <Dialog open={state} onClose={() => setState(false)}>
				<DialogContent style={{ width: '600px', height: '500px',borderStyle:'solid',borderColor:"#F2ECFE",borderWidth:'5px', padding:'20px'}}>
					<Pop item={props} closePopup={() => setState(false)} />
				</DialogContent>
			</Dialog>
        <div className="card">
            <center>
            <img className="box" src={props.picture} style={{objectFit: "cover", height: "200px", width: "200px"}}/>
            </center>
            <h1 className="title">{props.title}</h1>
            <p className="description">{props.description}</p>
            <p>{props.owner}</p>
            <div>
                <h3>Free</h3> 
                
                <button onClick={togglePop} className="coupon"><img className="tag" src="../../images/Coupon/Tag.svg" /> GET COUPON</button>
            </div>
        </div>
        <style jsx>{Styles}</style>
    </div>)
};
export default temp;