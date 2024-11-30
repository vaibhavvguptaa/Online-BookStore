import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getimgUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/Features/Cart/CartSlice'


const BookCard = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  // Safeguard to check if book exists and has valid properties
  if (!book || !book.coverImage) {
    return <div className="text-red-500">Book data unavailable.</div>; // Handle case where book is undefined
  }

  return (
    <div className="rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/books/${book._id}`}>
            {" "}
            {/* Corrected book._id */}
            <img
              src={getImgUrl(book.coverImage)}
              alt={book.title || "Book cover"}
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/books/${book._id}`}>
            {" "}
            {/* Corrected book._id */}
            <h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book.title || "Untitled"} {/* Fallback if title is missing */}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {book.description.length > 80
              ? `${book.description.slice(0, 80)}....`
              : book.description}
            {/* Fallback if description is missing */}
          </p>
          <p className="font-medium mb-5">
            Rs {book.newPrice || "N/A"}
            {book.oldPrice && (
              <span className="line-through font-normal ml-2">
                Rs {book.oldPrice}
              </span>
            )}
          </p>
          <button
            onClick={() => handleAddToCart(book)}
            className="bg-primary px-12 py-2 rounded-md text-base font-secondary font-bold hover:bg-secondary hover:text-white transition-all duration-200 cursor-pointer space-x-1 flex items-center gap-1"
          >
            <FiShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
