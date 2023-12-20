import React from "react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { Dialog } from "@headlessui/react";

const CreateChatForm = ({ createChatUsing, setCreateChatUsing, setCreateChatModalStatus, cancelButtonRef }) => {
  return (
    <div>
      <div className="bg-black px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <UserPlusIcon className="h-6 w-6 text-sky-900" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-gray-300"
            >
              Create New Chat
            </Dialog.Title>
            <div className="mt-2 flex flex-row justify-between w-full">
              <form>
                <div className="w-full h-fit p-2 flex flex-col justify-around items-start gap-3">
                  <div className="flex flex-col gap-y-1">
                    <label
                      htmlFor="user2"
                      className="text-white text-md font-medium"
                    >
                      {createChatUsing == "uid" ? "User ID" : "E-mail"}:
                    </label>
                    <span className="text-[12px] text-white">
                      Enter {createChatUsing == "uid" ? "ID" : "email"} of the
                      user to chat with
                    </span>
                  </div>
                  <input
                    type={createChatUsing == "uid" ? "text" : "email"}
                    className="rounded bg-neutral-800 text-white text-sm tracking-wider font-medium"
                  />
                </div>
              </form>
              <div className="flex flex-col justify-around items-center">
                <div className="w-full">
                  <span className="font-bold tracking-wide text-[12px] text-white">
                    Create using:
                  </span>
                </div>
                <div
                  className={`${
                    createChatUsing == "uid"
                      ? "bg-neutral-500"
                      : "bg-neutral-800"
                  } flex justify-center items-center rounded px-2 py-0.5 hover:cursor-pointer w-24 hover:bg-opacity-40`}
                  onClick={() => setCreateChatUsing("uid")}
                >
                  <span className="text-sm font-medium tracking-wide text-white">
                    User ID
                  </span>
                </div>
                <div
                  className={`${
                    createChatUsing == "mail"
                      ? "bg-neutral-500"
                      : "bg-neutral-800"
                  } flex justify-center items-center rounded px-2 py-0.5 hover:cursor-pointer w-24 hover:bg-opacity-40`}
                  onClick={() => setCreateChatUsing("mail")}
                >
                  <span className="text-sm font-medium tracking-wide text-white">
                    E-mail
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-sky-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 sm:ml-3 sm:w-auto"
          onClick={() => setCreateChatModalStatus(false)}
        >
          Create New Chat
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto hover:text-black"
          onClick={() => setCreateChatModalStatus(false)}
          ref={cancelButtonRef}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreateChatForm;
