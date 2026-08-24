import useReveal from '../hooks/useReveal.js'

export default function Reveal({ as: Tag = 'div', className = '', children }) {
  const [ref, visible] = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
