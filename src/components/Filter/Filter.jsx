import PropTypes from 'prop-types';

export function Filter({ value, onChange }) {
  return (
    <label
      className="bg-filterLabelColor w-[58%] mx-auto mb-2 mt-5 py-1 px-5
    rounded-0.5 flex md:w-[85%] md:text-3 md:py-1 md:px-2"
    >
      <input
        placeholder="Enter name for filter"
        type="text"
        filter={value}
        onChange={event => {
          onChange(event.currentTarget.value);
        }}
        className="placeholder:opacity-50 flex text-4 font-medium bg-lightPartsColor
        text-darkFont border-none outline-none w-11/12 max-w-[480px] h-10 rounded 
        mx-auto opacity-70 text-center py-0.5 pr-2 pl-7 placeholder:text-center  
        placeholder:text-filterPlaceholderColor placeholder:py-1 placeholder:px-5 md:w-[90%]
        md:text-xs md2:text-sm md:pl-2 ssm:pl-1"
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
