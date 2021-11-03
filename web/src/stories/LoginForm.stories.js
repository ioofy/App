import LoginForm from 'src/components/LoginForm'
import * as BoxIcons from 'react-icons/bi'
import { Link, routes } from '@redwoodjs/router'

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
}

export const FormDefault = () => {
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
              <span>Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              className="input label-text"
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="label">
              <span>Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="input label-text"
              required
            />
          </div>
          <span className="mt-4 ml-1" style={{ cursor: 'pointer' }}>
            Forgot Password?
          </span>
          <button className="btn btn-primary mt-4">Login</button>
          <span style={{ margin: '20px auto' }}>
            Didn&apos;t have an account?{' '}
            <Link to={routes.signUp()}>
              <span style={{ cursor: 'pointer', color: 'pink' }}>
                Sign up now
              </span>
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}
