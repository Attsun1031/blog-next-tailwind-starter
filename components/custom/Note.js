const Note = ({ title, desc }) => (
  <div
    className="bg-indigo-100 border-t-4 border-indigo-500 rounded-b text-indigo-900 px-4 py-3 shadow-md mb-8"
    role="alert"
  >
    <div className="flex">
      <div className="py-1"></div>
      <div>
        {!!title && (
          <div className="font-bold inline-flex items-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              className="h-6 w-6 text-indigo-500 flex"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
              />
            </svg>
            {title}
          </div>
        )}
        <div className="text-sm">{desc}</div>
      </div>
    </div>
  </div>
)

export default Note
