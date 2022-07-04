import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Loader from 'react-loaders'
import AnimateLetter from '../AnimatedLetters'
import Logo from './Logo/index'

const Index = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['', 'm', 'e', 'r', 'c', 'y']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <AnimateLetter
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={16}
                        />
                        <br />
                        <AnimateLetter
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Index