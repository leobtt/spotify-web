import { getProviders, signIn } from 'next-auth/react'

const Login = ({ providers }) => {
  return (
    <>
      <p>Login page...</p>
    </>
  )
}

export default Login

export const getServerSideProps = async () => {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
