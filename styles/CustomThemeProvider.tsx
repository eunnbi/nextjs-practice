import { ThemeProvider } from "styled-components";
import { useThemeValue } from "@hooks/useTheme";
import { lightTheme, darkTheme } from "./theme";

const CustomThemeProvider = ({ children }: React.PropsWithChildren) => {
  const { isLightTheme } = useThemeValue();
  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
