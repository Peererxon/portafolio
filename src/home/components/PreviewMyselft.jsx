import React from 'react'
import '../styles/previewMyselft.scss';
import micara from '../../shared/Statics/frontal-min.png';


const PreviewMyselft = () => {
    return (
        <div className="preview">
            <div className="myface">
                <img className =" myface_img circle" src={micara} alt="Cara de Anderson Gil" title="Anderson Gil"/>
            <p>hola soy</p>
            <hr></hr>
            <p></p>
            </div>
        </div>
    )
}

export default PreviewMyselft;