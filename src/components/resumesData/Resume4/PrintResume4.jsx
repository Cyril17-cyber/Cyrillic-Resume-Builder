import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume4 from './Resume4';
import PrintIcon from '@material-ui/icons/Print';
import Fab from '@material-ui/core/Fab';

function PrintResume4(props) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

    return (
        <div className="printResume">
            <Resume4
            links={props.links}
            Data={props.Data}
           FirstLis={props.FirstLis}
           SecondLis={props.SecondLis}
           ThirdLis={props.ThirdLis}
           deleteFirstLi={props.deleteFirstLi}
           deleteSecondLi={props.deleteSecondLi}
           deleteThirdLi={props.deleteThirdLi}
           deleteLink={props.deleteLink}
           ref={componentRef} />
            <Fab onClick={handlePrint}>
                <PrintIcon />
            </Fab>
        </div>
    );
}

export default PrintResume4;