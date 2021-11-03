import { MetaTags } from '@redwoodjs/web'
import { FormDefault } from 'src/stories/SignUp.stories'

const SignUpPage = () => {
  return (
    <>
      <MetaTags
        title="SignUp"
        // description="SignUp description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <FormDefault />
    </>
  )
}

export default SignUpPage
