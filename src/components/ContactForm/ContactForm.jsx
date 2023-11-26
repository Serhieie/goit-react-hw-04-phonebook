import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { schema } from 'constants';
import { succesMessage, nameCheckerError } from '../../helpers/notiflix';
import { Input } from '../ContactFormInput/ContactFormInput';
import { AiOutlineUserAdd } from 'react-icons/ai';
import normalizePhoneNumber from '../../helpers/numberNormalize';
import normalizeName from 'helpers/nameNormalize';
import { ErrorMessage } from 'formik';

const initialValues = {
  name: '',
  number: '',
};

export function ContactForm({ contacts, onSubmit }) {
  const handleSubmit = (event, { resetForm }) => {
    const { name, number } = event;

    let someNum = normalizePhoneNumber(number);
    let normName = normalizeName(name);
    const isNameExists = contacts.some(
      contact => contact.name.toLowerCase() === normName.toLowerCase()
    );
    if (isNameExists) {
      return nameCheckerError();
    }
    onSubmit(normName, someNum);
    succesMessage();
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form
        autoComplete="off"
        className="flex gap-2 flex-col w-1/3 py-20 pr-7 pl-5 rounded-sm
          shadow-lg shadow-shadowBox min-h-562 bg-gradient-to-tr
        from-smallWraperGradient1 to-smallWraperGradient2 md:py-7 md:px-5
        md:min-h-0 md:w-11/12"
      >
        <h1 className="text-center text-3xl m-0 md:text-xl md2:text-xl font-bold ">
          Add Contact Field
        </h1>
        <Input />
        <div
          className="w-full flex justify-center items-center flex-col h-20 mt-2
          md:text-base md:h-7"
        >
          <ErrorMessage
            className="text-xl text-errorMsg m-0 p-0 items-center 
              md:w-10/12 md:text-base md2:text-sm"
            name="name"
            component="div"
          />
          <ErrorMessage
            className="text-xl text-errorMsg m-0 p-0 items-center 
              md:w-10/12 md:text-base md2:text-sm"
            name="number"
            component="div"
          />
        </div>
        <button
          type="submit"
          className="text-center w-40 h-11 rounded-sm bg-buttonColor border-none 
            outline-none mx-auto mt-5 cursor-pointer shadow-md shadow-shadowBox
            flex items-center justify-around transition-all duration-300 text-buttonTextColor
            text-4 hover:bg-buttonHoverColor md:w-40 md:h-11 md:mt-4 text-lg md2:w-32 md2:text-sm"
        >
          Add Contact <AiOutlineUserAdd />
        </button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
