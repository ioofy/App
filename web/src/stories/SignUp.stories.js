import SignUpForm from 'src/components/SignUp'
import * as BoxIcons from 'react-icons/bi'
import { Link, routes } from '@redwoodjs/router'

export default {
  title: 'Components/SignUpForm',
  component: SignUpForm,
}

export const FormDefault = () => {
  const signUp = () => {
    console.log('login')
  }
  return (
    <>
      <div
        className="card shadow-2xl lg:card-side text-primary-content"
        id="form"
      >
        <div className="card-body">
          <div className="logo_content">
            <div className="logo">
              <BoxIcons.BiAnalyse size={28} />
              <div className="logo_name">Our Company</div>
            </div>
          </div>
          <div className="form-control">
            <label className="label" htmlFor="label">
              <span>Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input label-text"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="label">
              <span>Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              className="input label-text"
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="label">
              <span>Password</span>
            </label>
            <input
              type="text"
              placeholder="Your Password"
              className="input label-text"
            />
          </div>
          <span className="mt-4 ml-1" style={{ cursor: 'pointer' }}>
            Forgot Password?
          </span>
          <button className="btn btn-primary mt-4" onClick={() => signUp()}>
            Sign Up
          </button>
          <span style={{ margin: 'auto' }}>
            Already have an account?{' '}
            <Link to={routes.login()}>
              <span style={{ cursor: 'pointer', color: 'pink' }}>
                Sign in now
              </span>
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}
