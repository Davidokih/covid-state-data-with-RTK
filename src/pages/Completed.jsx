import PropTypes from "prop-types"
import { useState } from "react";

const Completed = ({ name, notes, state,covid19Site }) => {
  
   const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  // Determine if the text needs to be truncated
  const shouldTruncate = notes.length > 100;

  // Truncate the text if necessary
  const displayedText = shouldTruncate && !isExpanded
    ? `${notes.substring(0, 100)}...`
    : notes;
  return (
    <>
        <div className="rounded-md bg-white font-medium text-sm mw-[350px] flex justify-center items-center shadow">
              <div className="text-indigo-950 mt-7 mb-7 w-[75%]">
          <div className="flex justify-center text-xl rounded-full items-center shadow w-10 h-10 mb-5 text-green-400">{ state}</div>
                  <div>
            <h1 className="text-2xl font-bold mb-4">{ name}</h1>
            <div className="text-sm font-medium">{displayedText }</div>
                 <a href={covid19Site}> <div className="mt-8 text-orange-400 font-semibold underline">For more Info</div></a>
                  </div>
              </div>          
        </div>
    </>
  )
}

Completed.propTypes = {
  name: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  covid19Site: PropTypes.string.isRequired,
}
export default Completed