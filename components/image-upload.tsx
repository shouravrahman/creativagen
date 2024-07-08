import { ImageIcon } from "lucide-react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type Props = {
  handleImageDropped: (droppedImage: any) => Promise<void>;
};

export default function ImageUpload({ handleImageDropped }: Props) {
  const onDrop = useCallback(
    (acceptedFiles: any[]) => {
      handleImageDropped(acceptedFiles[0]);
    },
    [handleImageDropped]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="mt-2 cursor-pointer bg-blue-100/50 flex justify-center rounded-lg border border-dashed border-blue-300 px-6 py-10"
    >
      <div className="text-center">
        <ImageIcon
          className="mx-auto h-12 w-12 text-blue-500"
          aria-hidden="true"
        />
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
          <input
            {...getInputProps()}
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
          />
          {isDragActive ? (
            <span>Drop the image here...</span>
          ) : (
            <>
              <span>Upload a file</span>
              <p className="pl-1">or drag and drop</p>
            </>
          )}
        </div>
        <p className="text-xs leading-5 text-gray-600">image file up to 10MB</p>
      </div>
    </div>
  );
}
