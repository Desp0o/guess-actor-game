import EmailSVG from './components/SVG/EmailSVG'
import FacebookSVG from './components/SVG/FacebookSVG'
import GoogleSVG from './components/SVG/GoogleSVG'
import EyeIcon from './components/eyeIcon/EyeIcon'
import LoginButtonComp from './components/loginButtons/LoginButtonComp'


const Login = () => {
  return (
    <div className='login'>
        
        <EyeIcon />

        <div className='login_page_buttons'>
            <LoginButtonComp icon={<GoogleSVG/>} text='Log in with Google' />
            <LoginButtonComp icon={<FacebookSVG/>} text='Log in with Facebook' />
            <LoginButtonComp icon={<EmailSVG/>} text='Log in with Email' />
        </div>

        <p className='login_privacy_txt'>by cliking log in you agree to the <strong>terms of service</strong> and <strong>privacy policy</strong></p>
    </div>
  )
}

export default Login