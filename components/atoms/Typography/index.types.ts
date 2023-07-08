export default interface TypographyProps {
  children: React.ReactNode
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "map"
    | "button"
    | "p"
    | "hero"
    | "label"
    | "privacy"
  className?: string
}
