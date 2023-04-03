import { useEthers } from "@usedapp/core";
import { useForm, SubmitHandler } from "react-hook-form";
//import { useCreate_NFT } from '../Custom_Hooks/Create_NFT_Hook'
import { useState, useEffect } from "react";
import SuccessModal from "../modals/SuccessModal";
import Image from "next/image";
import Upload from "../../public/static/upload.svg";

export default function CreateNFTForm() {
  const { account, chainId } = useEthers();
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);

  interface FormData {
    title: string;
    description: string;
    link?: string;
    image: string;
  }

  const { loading, success, error, send } = useCreate_NFT();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      await send(data.image, data.title, data.description, data.link);
      setSuccessModalOpen(true); // Update the state variable after successful creation of NFT
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleCloseSuccessModal = () => {
    setSuccessModalOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white bg-opacity-10 rounded-lg border border-white w-4/5 p-4 mx-auto text-center mb-8">
          <h1 className="text-center lg-heading mb-4">Mint New NFT</h1>
          <div className="max-w-xs mx-auto">
            <p className="font-open-sans text-white text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <form className="rounded mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <div className="flex items-center justify-center w-full">
              <label className="h-20 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-customGray">
                <div className="flex flex-col items-center justify-center py-6">
                  <Image
                    src={Upload}
                    alt="Upload-image"
                    className=""
                    width={20}
                    height={20}
                  />
                  <p className="mb-2 text-sm text-white">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-white">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  {...register("image")}
                  required
                />
              </label>
            </div>
          </div>
          <div className="mb-4">
            <input
              className="w-full text-sm text-white bg-customGray rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-customGray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-customGray-900 py-2 px-3"
              id="username"
              type="text"
              placeholder="NFT Title"
              {...register("title")}
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-white bg-customGray rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-customGray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-customGray-900"
              placeholder="Description"
              {...register("description")}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <div>
              {!!error && (
                <>
                  <p className="text-red">An error occurred</p>
                </>
              )}
            </div>
            <button
              className="hover:text-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value={loading ? "Loading..." : "Submit"}
            >
              Mint without listing
            </button>
            <button
              className="bg-gradient-to-r
                        from-indigo-600
                        via-indigo-400
                        to-pink-500 text-white p-4 rounded-sm"
              type="submit"
              value={loading ? "Loading..." : "Submit"}
            >
              Mint and list immediately
            </button>
          </div>
        </form>
        <SuccessModal
          isOpen={isSuccessModalOpen}
          onClose={handleCloseSuccessModal}
        />
      </div>
    </div>
  );
}
