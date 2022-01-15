const Button = ({ Icon, name }) => {
  return (
    <button className="flex items-center space-x-2 hover:text-green-500">
      <Icon className="h-5 w-5" />
      <p>{name}</p>
    </button>
  )
}

export default Button
