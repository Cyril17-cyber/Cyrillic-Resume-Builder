import React from 'react';
import CheckBoxIcon from "@material-ui/icons/CheckBoxOutlined";
import CheckBoxBlank from "@material-ui/icons/CheckBoxOutlineBlank";

function Filters(props) {
    return (
        <div>
            {props.dropDown && <div className="filter">
                        <div className="filter__texts">

                            <div className="checkBox" onClick={props.setFreeCheckBox}>
                            {props.freeIsChecked? <CheckBoxIcon /> : <CheckBoxBlank />}
                            </div>

                            <p>Free</p>
                            
                        </div>
                        <div className="filter__texts">

                            <div className="checkBox" onClick={props.setProCheckBox}>
                                {props.proIsChecked? <CheckBoxIcon /> : <CheckBoxBlank />}
                            </div>
                        
                            <p>Pro</p>
                        </div>
                    </div>}
        </div>
    )
}

export default Filters;