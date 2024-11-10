import Form from "@/components/Form";

export default function Contact() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      {/* Centered form container with a dark background and blurred effect */}
      <div className="w-full max-w-4xl bg-blue-500 m-40 px-10 dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-lg rounded-xl">
        <Form />
      </div>
    </div>
  );
}
