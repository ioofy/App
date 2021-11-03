function Button(props) {
  const { className, children, ...rest } = props
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}

export default Button
