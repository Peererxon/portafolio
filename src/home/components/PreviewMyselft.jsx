import React from 'react'
import '../styles/previewMyselft.scss';
import micara from '../../shared/Statics/frontal-min.png';
import { useTranslation } from 'react-i18next';


const PreviewMyselft = () => {
    const {t} = useTranslation()
    return (
        <div className="preview">
            <div className="cardCenter">

                <div className="myface">
                    <img className =" myface_img circle" src={micara} alt="Cara de Anderson Gil" title="Anderson Gil"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <p>{t('home:quienSoy')}</p>
                            <p>{t('home:resumen')}</p>
                            <hr/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default PreviewMyselft;