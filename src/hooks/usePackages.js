import { useEffect, useState } from "react";

const usePackages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setPackages(data));
  }, []);

  return [packages, setPackages];
};

export default usePackages;
