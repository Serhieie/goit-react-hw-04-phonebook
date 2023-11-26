import { useState, useRef } from 'react';
import normalizePhoneNumber from '../../helpers/numberNormalize';
import { AiOutlineUserDelete } from 'react-icons/ai';
import Modal from 'react-modal';
import { settings } from 'helpers/deleteModalSettings';

Modal.setAppElement('#root');

export function ContactTableItem({ contact, index, onDeleteContact }) {
  const windowWidth = window.innerWidth;
  const [modalIsOpen, setIsOpen] = useState(false);
  const subtitle = useRef();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDelete = () => {
    onDeleteContact(contact.id);
    closeModal();
  };

  return (
    <tr className="border-b-2 border-tableBorderColor">
      <td width="5%" className="p-1 text-center bg-lightPartsColor  md:text-3">
        {index + 1}
      </td>
      <td width="38%" className="p-1 text-center bg-lightPartsColor  md:text-3">
        {contact.name}
      </td>
      <td width="42%" className="p-1 text-center bg-lightPartsColor  md:text-3">
        {normalizePhoneNumber(contact.number)}
      </td>
      <td width="15%" className="p-1 text-center bg-lightPartsColor  md:text-3">
        <button
          id="delete-btn"
          onClick={openModal}
          className="bg-buttonColor text-lightPartsColor mx-auto border-none py-1 px-2 text-xs cursor-pointer
          transition-all duration-300 flex items-center hover:bg-buttonHoverColor rounded-sm"
        >
          {windowWidth < 768 ? (
            <AiOutlineUserDelete style={{ marginRight: '4px' }} />
          ) : (
            'Delete'
          )}
        </button>
      </td>
      <Modal
        style={settings}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Delete Confirmation"
        className="md:w-[300px]"
      >
        <h2
          ref={subtitle}
          className=" text-center text-darkFont  text-2xl md:text-sm 
          "
        >
          Delete contact{' '}
          <span className="font-bold text-green-700">{contact.name}</span>?
        </h2>
        <div
          className="flex jusrify-center items-center mx-auto mt-10 
             md:mt-6 gap-1 "
        >
          <button
            onClick={handleDelete}
            className="text-4 bg-deleteBtnColor text-lightPartsColor
            border-none py-3 px-10 rounded-0.5 cursor-pointer transition-all
            duration-300 mx-auto hover:bg-deleteBtnHoverColor md:py-2 md:px-5
            "
          >
            Delete
          </button>
          <button
            onClick={closeModal}
            className="text-4 bg-buttonColor text-lightPartsColor
            border-none py-3 px-10 rounded-0.5 cursor-pointer transition-all
            duration-300 mx-auto hover:bg-buttonHoverColor md:py-2 md:px-5
            "
          >
            Cancel
          </button>
        </div>
      </Modal>
    </tr>
  );
}
