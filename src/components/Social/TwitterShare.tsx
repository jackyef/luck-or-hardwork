import { Link } from "@chakra-ui/react";

interface Props {
  text: string;
}

export const TwitterShare: React.FC<Props> = ({ text, children }) => (
  <Link
    isExternal
    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`}
  >
    {children}
  </Link>
);