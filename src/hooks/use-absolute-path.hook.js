import { useEffect, useState } from "react";

/**
 * get the absolute path to a resource
 * @returns {(url: string) => string}
 *
 * @example
 * const getAbsolutePath = useAbsolutePath();
 * getAbsolutePath("/notifications") // returns "/1.0.1/notifications"
 */
export const useAbsolutePath = () => {
  const [basedir, setBaseDir] = useState("");
  useEffect(() => {
    const base = document.querySelector("base");
    if (base) {
      setBaseDir(base.getAttribute("href"));
    }
  }, []);

  return url => `${basedir}${url}`.replace("//", "/");
};
