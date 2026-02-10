interface Profile {
  avatar: string;
  name: string;
  description: string;
}

function ProfileCard({ avatar, name, description }: Profile) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-sm mx-auto border border-gray-200">
      <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600"></div>
      <div className="px-6 pb-6 pt-0">
        <img
          src={avatar}
          alt="User avatar"
          className="w-32 h-32 rounded-full border-4 border-white shadow-lg -mt-16 mx-auto object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-900 text-center mt-4">
          {name}
        </h2>
        <p className="text-center text-gray-600 mt-2">{description}</p>

        <div className="flex gap-4 mt-6 pt-6 border-t border-gray-200">
          <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Follow
          </button>
          <button className="flex-1 py-2 px-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
