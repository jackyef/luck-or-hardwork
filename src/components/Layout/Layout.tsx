import { Container } from "@chakra-ui/react"

export const Layout: React.FC = ({ children }) => {
  return (
    <Container py={4} maxW="container.xl">{children}</Container>
  )
}