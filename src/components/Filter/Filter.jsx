import PropTypes from 'prop-types';

export const Filter = ({onChange, value}) => (
    <input type="text" value={value} onChange={onChange}/>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};