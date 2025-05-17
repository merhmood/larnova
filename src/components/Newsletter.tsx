import React from "react";

const Newsletter = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row gap-4 justify-between w-11/12 mx-auto">
        <h3 className="text-lg text-left lg:basis-52">
          Get news and updates from Larnova
        </h3>
        <div className="basis-9/12 lg:flex">
          <div className="basis-10/12 text-xs font-semibold text-gray-800">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-4 py-4 w-full text-base"
            />
            <div className="hidden lg:block">
              <p className="mt-5">
                By signing up you agree to receive updates and marketing
                messages (e.g. email, social, etc.) from Larnova about Larnova’s
                existing and future products and services.
              </p>
              <p className="mt-3">
                You may withdraw your consent and unsubscribe at any time by
                clicking the unsubscribe link included in our messages.
              </p>
            </div>
          </div>
          <div className="lg:ml-5 mt-2 lg:mt-0 font-bold pt-1.5">
            <button className="block lg:inline w-full lh:w-fit border-2 border-gray-200 px-5 py-2 basis-36 rounded-full cursor-pointer text-gray-500">
              Sign Up
            </button>
          </div>
        </div>
        <div className="block lg:hidden text-xs font-semibold text-gray-800">
          <p className="mt-2">
            By signing up you agree to receive updates and marketing messages
            (e.g. email, social, etc.) from Larnova about Larnova’s existing and
            future products and services.
          </p>
          <p className="mt-3">
            You may withdraw your consent and unsubscribe at any time by
            clicking the unsubscribe link included in our messages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
