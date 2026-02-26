import './animation.scss'

const AnimatedLetters = ({ letterClass = null, text, startIdx = 1, disableDelay = false }) => {
    return (
        <span>
            {
                text.split('').map((char, i) => (
                    <span 
                        key={char + i} 
                        //class based off of/ in addition to index determines delay (sequential animation)
                        className={`${letterClass} _${i + startIdx}`} 
                        //disable/remove the delayed animation class & sequence if disableDelay is true (will be upon timeout)
                        style={!disableDelay ? {animationDelay: `${(i + startIdx) / 10}s`} : {}}
                    >
                        {char}
                    </span>
                ))
            }
        </span>
    );
};

export default AnimatedLetters