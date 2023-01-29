import PropTypes from 'prop-types';

export const ButtonIcon = ({ children, onClick, ...allyProps }) => (
  <button type="button" onClick={onClick} {...allyProps}>
    {children}
  </button>
);

ButtonIcon.defaultProps = {
  onClick: () => null,
  children: null,
};

ButtonIcon.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
