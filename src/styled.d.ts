import "styled-component";

declare module "styled-components" {
  export interface DefaultTheme {
    textSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    color: {
      textColor: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
      };
      activeColor: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      bg: {
        md: string; // 700
        lg: string; // 800
        xl: string; // 900
        full: string;
      };
      highlight: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      red: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    };

    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    shadow: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    maxWidth: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    mp: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      xxxxl: string;
    };
    transition: {
      sm: string;
      md: sring;
      lg: string;
    };
    responsive: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
