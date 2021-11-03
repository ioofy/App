import '../styles/Form.css'

function SignUpForm(props) {
  const { className, children, ...rest } = props
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

export default SignUpForm
