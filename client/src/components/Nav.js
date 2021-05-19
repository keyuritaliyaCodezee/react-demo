import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import User from './Users/User'

function Nav() {
    return (
        <React.Fragment>
            {/* <div className="block">
                <div className="block1">Block 1 </div>
                <div className="block2">Block 1</div>
                <div className="block2">Block 1</div>
            </div> */}
            <User />
        </React.Fragment>
    )
}

export default Nav
