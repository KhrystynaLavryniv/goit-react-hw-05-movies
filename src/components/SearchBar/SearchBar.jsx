import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" autoComplete="off" autoFocus name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
