import React, {PropTypes} from 'react'
import NewAuth from '../../components/NewAuth'
import platformImage from '../../assets/images/platform_4.gif'
import Block from '../../components/Block'
import Button from '../../components/Button'
import styles from './BetaCTA.css'

const BetaCTA = (props) => {
  const loggedIn = (
    <Block className={styles.container}>
      <h1 className={styles.title}>Thanks!</h1>
    </Block>
  )
  return (
    <NewAuth
      className={props.className}
      style={props.style}
      loggedInComponent={loggedIn}
    >
      <Block className={styles.container}>
        <h1 className={styles.title}>The Serverless platform is coming</h1>
        <img src={platformImage} className={styles.image} role='presentation' />
        <Button>{props.buttonText}</Button>
      </Block>
    </NewAuth>
  )
}
BetaCTA.defaultProps = {
  buttonText: 'Sign up for the beta'
}

BetaCTA.propTypes = {
  buttonText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
}
export default BetaCTA
