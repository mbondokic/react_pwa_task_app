import bgDark from '../img/bg-dark.jpg';
import bgLight from '../img/bg-light.jpg';

export const lightTheme = {
  background: '#fafafa',
  appBackground: '#fff',
  listBorder: '#f4f3f6',
  textPrimary: '#333',
  textSecondary: '#7c7c74;',
  textActive: '#3a7bfd',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  mainBg: `url(${bgLight})`
}

export const darkTheme = {
  background: '#181824',
  appBackground: '#25273c',
  listBorder: '#25273c',
  textPrimary: '#fff',
  textSecondary: '#7c7c74',
  textActive: '#3a7bfd',
  mainBg: `url(${bgDark})`
}