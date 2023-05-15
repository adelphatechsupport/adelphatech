/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

const ResponsiveIframe = ({ src, children, title, ...props }) => {
  return (
    <Box sx={styles.videoContainer}>
      {children ? (
        children
      ) : (
        <iframe
        src="https://www.youtube.com/embed/OzztBkwLNe0"
        title="YouTube video player"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
      )}
    </Box>
  );
};

export default ResponsiveIframe;

const styles = {
  videoContainer: {
    overflow: 'hidden',
    paddingTop: '56.25%',
    position: 'relative',
    iframe: {
      border: 0,
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
  },
};
