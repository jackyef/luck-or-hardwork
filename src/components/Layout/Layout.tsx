import { Container } from "@chakra-ui/react"

export const Layout: React.FC = ({ children }) => {
  return (
    <Container
      py={4}
      maxW="container.md"
      overflowX="hidden"
      minH="90vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Container>
  )
}