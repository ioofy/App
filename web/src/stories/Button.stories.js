import Button from '../components/Button'

export default {
  title: 'Components/Button',
  component: Button,
}

export const Primary = () => (
  <Button className="btn btn-primary">Primary</Button>
)

export const Secondary = () => (
  <Button className="btn btn-secondary">Secondary</Button>
)

export const Outline = () => (
  <Button className="btn btn-outline btn-accent">Accent</Button>
)

export const Large = () => <Button className="btn btn-lg">large</Button>

export const Small = () => <Button className="btn btn-sm">Small</Button>
