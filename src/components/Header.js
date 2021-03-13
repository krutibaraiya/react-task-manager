import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    const onClick= () => {
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text = 'Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Manager',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Header
