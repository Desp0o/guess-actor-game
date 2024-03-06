import EyeIcon from './components/eyeIcon/EyeIcon'
import LoginButtonComp from './components/loginButtons/LoginButtonComp'
import EmailSVG from './components/SVG/EmailSVG'
import FacebookSVG from './components/SVG/facebookSVG'
import GoogleSVG from './components/SVG/googleSVG'


const Login = () => {
  return (
    <div className='login'>
        
        <EyeIcon />

        <div className='buttons'>
            <LoginButtonComp icon={<GoogleSVG/>} text='Log in with Google' />
            <LoginButtonComp icon={<FacebookSVG/>} text='Log in with Facebook' />
            <LoginButtonComp icon={<EmailSVG/>} text='Log in with Email' />
        </div>
    </div>
  )
}

export default Login