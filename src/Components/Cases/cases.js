import './cases.scss'
import Container from "../shared/container/container"

import cases1 from '../../images/images/cases/cases1.jpg'
import cases1wp from '../../images/images/cases/cases1.webp'
import cases12x from '../../images/images/cases/cases1@2x.jpg'
import cases12xwp from '../../images/images/cases/cases1@2x.webp'

import cases2 from '../../images/images/cases/cases2.jpg'
import cases2wp from '../../images/images/cases/cases2.webp'
import cases22x from '../../images/images/cases/cases2@2x.jpg'
import cases22xwp from '../../images/images/cases/cases2@2x.webp'

import cases3 from '../../images/images/cases/cases3.jpg'
import cases3wp from '../../images/images/cases/cases3.webp'
import cases32x from '../../images/images/cases/cases3@2x.jpg'
import cases32xwp from '../../images/images/cases/cases3@2x.webp'

import cases4 from '../../images/images/cases/cases4.jpg'
import cases4wp from '../../images/images/cases/cases4.webp'
import cases42x from '../../images/images/cases/cases4@2x.jpg'
import cases42xwp from '../../images/images/cases/cases4@2x.webp'

import cases5 from '../../images/images/cases/cases5.jpg'
import cases5wp from '../../images/images/cases/cases5.webp'
import cases52x from '../../images/images/cases/cases5@2x.jpg'
import cases52xwp from '../../images/images/cases/cases5@2x.webp'

import cases6 from '../../images/images/cases/cases6.jpg'
import cases6wp from '../../images/images/cases/cases6.webp'
import cases62x from '../../images/images/cases/cases6@2x.jpg'
import cases62xwp from '../../images/images/cases/cases6@2x.webp'

import cases72xwp from '../../images/images/cases/cases7@2x.webp'
import cases82xwp from '../../images/images/cases/cases8@2x.webp'


import React, {useState} from "react";
import FsLightbox from "fslightbox-react";

const Cases = () => {
    // const [toggler, setToggler] = useState(false);
    const [lightboxController, setLightboxController] = useState({
        toggler: false,
        slide: 1
    });

    function openLightboxOnSlide(number) {
        setLightboxController({
            toggler: !lightboxController.toggler,
            slide: number
        });
    }

    return (
        <section className='cases' id='cases'>
            <Container>
                <p className='cases-up-title'>This is what we do</p>
                <p className='cases-title'>Business Cases</p>
                <p className='cases-sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                    sapiente!</p>
                <ul className='cases-list'>
                    <li className='cases-item'>
                        <picture>
                            <source srcSet={`${cases12xwp} 2x, ${cases1wp} 1x, ${cases12x} 2x, ${cases1} 1x`}
                            />
                            <img src="#" alt="Пример кейса" className="cases-image"
                                 onClick={() => openLightboxOnSlide(1)}/>
                        </picture>
                    </li>
                    <li className='cases-item'>
                        <picture className='picture'>
                            <source srcSet={`${cases22xwp} 2x, ${cases2wp} 1x, ${cases22x} 2x, ${cases2} 1x`}
                            />
                            <img src="#" alt="Пример кейса" className="cases-image"
                                 onClick={() => openLightboxOnSlide(2)}/>
                        </picture>
                    </li>
                    <li className='cases-item'>
                        <picture className='picture'>
                            <source srcSet={`${cases32xwp} 2x, ${cases3wp} 1x, ${cases32x} 2x, ${cases3} 1x`}
                            />
                            <img src="#" alt="Пример кейса" className="cases-image"
                                 onClick={() => openLightboxOnSlide(3)}/>
                        </picture>
                    </li>
                    <li className='cases-item'>
                        <picture className='picture'>
                            <source srcSet={`${cases42xwp} 2x, ${cases4wp} 1x, ${cases42x} 2x, ${cases4} 1x`}
                            />
                            <img src="#" alt="Пример кейса" className="cases-image"
                                 onClick={() => openLightboxOnSlide(4)}/>
                        </picture>
                    </li>
                    <li className='cases-item'>
                        <picture className='picture'>
                            <source srcSet={`${cases52xwp} 2x, ${cases5wp} 1x, ${cases52x} 2x, ${cases5} 1x`}
                            />
                            <img src="#" alt="Пример кейса" className="cases-image"
                                 onClick={() => openLightboxOnSlide(5)}/>
                        </picture>
                    </li>
                    <li className='cases-item'>
                        <picture className='picture'>
                            <source srcSet={`${cases62xwp} 2x, ${cases6wp} 1x, ${cases62x} 2x, ${cases6} 1x`}
                            />
                            <img src="#" alt="Пример кейса" className="cases-image"
                                 onClick={() => openLightboxOnSlide(6)}/>
                        </picture>
                    </li>
                </ul>
            </Container>
            <FsLightbox
                toggler={lightboxController.toggler}
                sources={[
                    cases12xwp,
                    cases22xwp,
                    cases32xwp,
                    cases42xwp,
                    cases52xwp,
                    cases62xwp,
                    cases72xwp,
                    cases82xwp
                ]}
                slide={lightboxController.slide}
            />
        </section>
    )
}
export default Cases