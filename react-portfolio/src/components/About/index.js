import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                strArray={['A', 'b', 'o', 'u', 't','', 'm', 'e]']}
                idx={15}
                />
            </h1>
            <p>
                I' very ambitious front-end developer looking for a role in established IT company...
            
            
            </p>
            <p>
                I'm quietly confident...

            </p>
            <p>
                If I need to define myself in one sentence...
            </p>
        </div>
    </div>
)
}

export default About