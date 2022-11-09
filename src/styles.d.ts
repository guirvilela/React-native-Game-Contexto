import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      bgColor: string;
      bgDarkerColor: string;
      bgLighterColor: string;
      accentBgColor: string;
      green: string;
      yellow: string;
      red: string;
    };
    config: {
      normalWeight: 600;
      boldWeight: 800;
    };
  }
}
