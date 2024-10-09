import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface WelcomeModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-gray-800 text-center mb-4"
                >
                  Welcome to the Website!
                </Dialog.Title>

                <div className="mt-2">
                  <p className="text-base text-gray-600 text-center">
                    Each search will take 2 seconds in order to simulate a
                    real-world scenario and demonstrate the loaders.
                  </p>
                </div>

                <div className="w-1/2 mx-auto my-4 border-t-2 border-blue-200"></div>

                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-2 text-sm font-medium text-white hover:from-blue-600 hover:to-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-lg"
                    onClick={closeModal}
                  >
                    Got it!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default WelcomeModal;
