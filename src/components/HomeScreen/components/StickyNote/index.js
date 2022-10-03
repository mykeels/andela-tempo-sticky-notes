import React from "react";

const HEIGHT_OFFSET = 30;

/**
 *
 * @param {object} props
 * @param {number} [props.width]
 * @param {number} [props.height]
 * @param {(size: { width: number, height: number }) => any} [props.onResize]
 * @returns {JSX.Element}
 */
export const StickyNote = ({ width, height, onResize, ...props }) => {
  return (
    <div {...props} className="bg-gray-100 inline-block p-0">
      <div className="bg-blue px-2 py-2 text-right block w-full">
        <button className="text-2xl text-gray-200 inline-block focus:outline px-4 relative">
          <span className="relative bottom-2">...</span>
        </button>
      </div>
      <textarea
        className="bg-gray-100"
        style={{
          resize: "both",
          width,
          height: height - HEIGHT_OFFSET
        }}
        onMouseUp={(e) => {
          /** @type {HTMLTextAreaElement & { offsetWidth: number, offsetHeight: number }} */
          // @ts-ignore
          const element = e.target;
          onResize({
            width: element.offsetWidth,
            height: element.offsetHeight + HEIGHT_OFFSET
          });
        }}
      ></textarea>
    </div>
  );
};

StickyNote.defaultProps = {
  width: 100,
  height: 100
};
