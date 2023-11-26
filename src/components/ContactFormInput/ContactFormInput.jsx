import { LiaUserEditSolid } from 'react-icons/lia';
import { FiPhoneMissed } from 'react-icons/fi';
import { Field } from 'formik';

export function Input() {
  return (
    <>
      <label
        htmlFor="name"
        className="mt-10 text-xl flex items-center gap-2 md:ml-2 md:w-10/12
      md2:text-sm font-medium"
      >
        <LiaUserEditSolid className="ml-3 md:ml-6" />
        Name
      </label>
      <Field
        type="text"
        name="name"
        id="name"
        placeholder="Enter name"
        className="text-center mx-auto w-11/12 py-1 px-5 rounded-sm h-10 bg-lightPartsColor 
        border-0 outline-none  text-4 text-darkFont placeholder:text-darkFont 
         md:w-10/12  md:text-4 md:h-9 md:py-0.5 md:px-2 placeholder:opacity-50 
         md2:text-2 ssm:text-xs md2:text-xs"
      />
      <label
        htmlFor="number"
        className="mt-6 text-xl flex items-center gap-2 md:ml-2 md:w-10/12
      md:text-4 md2:text-sm font-medium"
      >
        <FiPhoneMissed className="ml-3 md:ml-6 w-[14px] h-[14px]" />
        Phone Number
      </label>
      <Field
        type="tel"
        name="number"
        id="number"
        placeholder="Enter phone number"
        className="text-center w-11/12 py-1 px-5 rounded-sm h-10 bg-lightPartsColor 
        border-0 outline-none mx-auto text-4 text-darkFont placeholder:text-darkFont 
 md:w-10/12  md:text-4 md:h-9 md:py-0.5 md:px-2 placeholder:opacity-50 
 md2:text-2 ssm:text-xs md2:text-xs"
      />
    </>
  );
}
