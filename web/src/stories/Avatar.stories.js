import Avatar from 'src/components/Avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
}

export const Default = () => (
  <>
    <div className="avatar">
      <div className="mb-8 rounded-btn w-24 h-24 mr-5">
        <img
          src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
          alt="avatar-1"
        />
      </div>
    </div>

    <div className="avatar">
      <div className="mb-8 rounded-btn w-14 h-14 mr-5">
        <img
          src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
          alt="avatar-1"
        />
      </div>
    </div>

    <div className="avatar">
      <div className="mb-8 rounded-btn w-10 h-10">
        <img
          src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
          alt="avatar-1"
        />
      </div>
    </div>
  </>
)

export const AvatarGroup = () => (
  <>
    <div className="-space-x-6 avatar-group">
      <div className="avatar">
        <div className="w-16 h-16">
          <img
            src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"
            alt="avatar"
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-16 h-16">
          <img
            src="http://daisyui.com/tailwind-css-component-profile-2@56w.png"
            alt="avatar"
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-16 h-16">
          <img
            src="http://daisyui.com/tailwind-css-component-profile-3@56w.png"
            alt="avatar"
          />
        </div>
      </div>
      <div className="avatar">
        <div className="w-16 h-16">
          <img
            src="http://daisyui.com/tailwind-css-component-profile-5@56w.png"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  </>
)
