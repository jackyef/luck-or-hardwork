import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  components: {
    Link: {
      variants: {
        link: function(props: Dict) {
          const { colorScheme: c } = props;

          return {
            padding: 0,
            height: 'auto',
            lineHeight: 'normal',
            verticalAlign: 'baseline',
            color: mode(`${c}.500`, `${c}.200`)(props),
            _hover: {
              textDecoration: 'underline',
              _disabled: {
                textDecoration: 'none',
              },
            },
            _active: {
              color: mode(`${c}.700`, `${c}.500`)(props),
            },
          };
        },
      },
      defaultProps: {
        variant: 'link',
        colorScheme: 'telegram',
      },
    },
  },
});
