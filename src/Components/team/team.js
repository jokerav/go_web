import './team.scss'
import Container from "../shared/container/container";

import person1wp2x from '../../images/images/team/person1@2x.webp'
import person1wp from '../../images/images/team/person1.webp'
import person1jpeg2x from '../../images/images/team/person1@2x.jpg'
import person1jpeg from '../../images/images/team/person1.jpg'

import person2wp2x from '../../images/images/team/person2@2x.webp'
import person2wp from '../../images/images/team/person2.webp'
import person2jpeg2x from '../../images/images/team/person2@2x.jpg'
import person2jpeg from '../../images/images/team/person2.jpg'

import person3wp2x from '../../images/images/team/person3@2x.webp'
import person3wp from '../../images/images/team/person3.webp'
import person3jpeg2x from '../../images/images/team/person3@2x.jpg'
import person3jpeg from '../../images/images/team/person3.jpg'

const Team = () => {
    return (
        <section className='team'>
            <Container>
                <p className='team-above-title'>Who we are</p>
                <p className='team-title'>Our Professional Team</p>
                <p className='team-sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                    sapiente!</p>
                <ul className='team-list'>
                    <li className='team-item'>
                            <picture>
                                <source
                                    srcSet={`${person1wp2x} 2x, ${person1jpeg2x} 2x, ${person1wp} 1x, ${person1jpeg} 1x`}
                                />
                                <img src="#" alt='фото сотрудника' className='team-photo'/>
                            </picture>
                        <p className='team-name'>John Doe</p>
                        <p className='team-position'>President</p>
                    </li>
                    <li className='team-item'>
                        <picture>
                            <source
                                srcSet={`${person2wp2x} 2x, ${person2jpeg2x} 2x, ${person2wp} 1x, ${person2jpeg} 1x`}
                            />
                            <img src="#" alt='фото сотрудника' className='team-photo'/>
                        </picture>
                        <p className='team-name'>Jane Doe</p>
                        <p className='team-position'>Vice President</p>
                    </li>
                    <li className='team-item'>
                        <picture>
                            <source
                                srcSet={`${person3wp2x} 2x, ${person3jpeg2x} 2x, ${person3wp} 1x, ${person3jpeg} 1x`}
                            />
                            <img src="#" alt='фото сотрудника' className='team-photo'/>
                        </picture>
                        <p className='team-name'>Steve Smith</p>
                        <p className='team-position'>Marketing Head</p>
                    </li>
                </ul>
            </Container>
        </section>
    )
}
export default Team