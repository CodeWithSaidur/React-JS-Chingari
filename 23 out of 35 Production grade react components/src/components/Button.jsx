function Button({
  children,
  type = 'button',
  bgColor = 'bg-blue-600',
  textColor = 'text-white',
  className = '',
  ...prpps
}) {
  return (
    <button
      className={`px-4 py-4 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...prpps}>
      {children}
    </button>
  )
}

export default Button
