import Badge from 'src/components/Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
}

export const Default = () => (
  <>
    <div className="badge mr-2">neutral</div>
    <div className="badge badge-primary mr-2">primary</div>
    <div className="badge badge-secondary mr-2">secondary</div>
    <div className="badge badge-accent mr-2">accent</div>
    <div className="badge badge-ghost mr-2">ghost</div>
  </>
)

export const Variants = () => (
  <>
    <div className="badge badge-info mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-4 h-4 mr-2 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      info
    </div>
    <div className="badge badge-success mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-4 h-4 mr-2 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      success
    </div>
    <div className="badge badge-warning mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-4 h-4 mr-2 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      warning
    </div>
    <div className="badge badge-error mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block w-4 h-4 mr-2 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      error
    </div>
  </>
)
