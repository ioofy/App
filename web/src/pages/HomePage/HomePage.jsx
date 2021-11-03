import { MetaTags } from '@redwoodjs/web'
import { SideNavbar } from 'src/stories/SideNavbar.stories'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <SideNavbar />
    </>
  )
}

export default HomePage
