import createTheme from "../../createTheme";

const colors = {
  primary: "#ccc",
  secondary: "#c8f5fd",
  tertiary: "white",
  quaternary: "#CECECE" // pale gray
};

const theme = createTheme(colors, {
    primary: "Montserrat",
    secondary: "Helvetica"
  }, {
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      heading: {
        h1: {
          color: colors.secondary,
          fontSize: '4rem',
          textTransform: 'uppercase'
        },
        h2: {
          color: colors.tertiary,
          fontSize: '3.5rem',
        },
        h3: {
          color: colors.tertiary,
          fontSize: '3rem',
        },
        h4: {
          color: colors.tertiary,
          fontSize: '2.5rem',
        },
        h5: {
          color: colors.tertiary,
          fontSize: '2rem',
        },
        h6: {
          color: colors.tertiary,
          fontSize: '1.5rem',
        }
      },
      codePane: {
        fontSize: '2rem'
      },
      code: {
        color: colors.tertiary,
      },
      text: {
        color: colors.primary,
        wordBreak: 'break-word'
      },
      link: {
        color: '#00d9ff',
        textDecoration: 'underline',
        wordBreak: 'break-word'
      },
    }
  });

export default theme;
