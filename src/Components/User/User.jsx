import React from 'react';
import { useParams } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

const User = () => {
  const { userid } = useParams();

  return (
    <div className="max-w-screen-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <div className="flex items-center mb-4">
        <span className="text-gray-600 text-lg mr-2">User ID:</span>
        <span className="text-2xl font-bold">{userid}</span>
      </div>
      <div className="mb-6">
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
          sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        </p>
      </div>
      <div>
        <Link
          to="/"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mr-2"
        >
          Back to Home
        </Link>
        <Link
          to={`/user/${userid}/edit`}
          className="inline-block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default User;
