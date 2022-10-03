import React from "react";
import { StickyHeader } from "./components";

const HEIGHT_OFFSET = 30;

/**
 *
 * @param {object} props
 * @param {number} [props.width]
 * @param {number} [props.height]
 * @param {(size: { width: number, height: number }) => any} props.onResize
 * @param {(text: string) => any} props.onChange
 * @param {() => JSX.Element} [props.Header]
 * @returns {JSX.Element}
 */
export const StickyNote = ({
  width,
  height,
  onResize,
  onChange,
  Header,
  ...props
}) => {
  return (
    <div {...props} className="bg-gray-100 inline-block p-0">
      <Header />
      <textarea
        className="bg-gray-100 text-white text-lg p-4"
        style={{
          resize: "both",
          width,
          height: height - HEIGHT_OFFSET
        }}
        onChange={(e) => onChange(e.target.value)}
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
  width: 160,
  height: 160,
  Header: StickyHeader
};
