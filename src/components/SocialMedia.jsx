export default function SocialMedia() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/rootrc/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 text-white hover:bg-gray-600 hover:shadow-xl hover:scale-110 transform transition-all duration-300"
      >
        <i className="fab fa-github text-2xl"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/ianwang3/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-700 text-white hover:bg-blue-500 hover:shadow-xl hover:scale-110 transform transition-all duration-300"
      >
        <i className="fab fa-linkedin-in text-2xl"></i>
      </a>

      <a
        href="mailto:ianwang5190@gmail.com"
        className="w-12 h-12 rounded-full flex items-center justify-center bg-red-500 text-white hover:bg-red-400 hover:shadow-xl hover:scale-110 transform transition-all duration-300"
      >
        <i className="fas fa-envelope text-2xl"></i>
      </a>
    </div>
  );
}
