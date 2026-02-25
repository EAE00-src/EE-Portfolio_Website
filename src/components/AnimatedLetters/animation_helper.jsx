import './animation.scss'

const AnimatedLetters = ({ letterClass, text, startIdx = 1, disableDelay = false }) => {
    return (
        <span>
            {
                 text.split('').map((char, i) => (
                    <span 
                        key={char + i} 
                        className={`${letterClass} _${i + startIdx}`} 
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