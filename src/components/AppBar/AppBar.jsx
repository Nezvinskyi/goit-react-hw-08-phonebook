import Navigation from '../Navigation';
const styles = {
  header: {
    margin: '0 auto',
    minHeight: 80,
    outline: '1px solid red',
  },
};

const AppBar = () => (
  <header style={styles.header}>
    <Navigation />
  </header>
);

export default AppBar;
