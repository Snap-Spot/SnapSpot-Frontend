import { useState, useEffect } from "react";


// 모바일임을 감지할 파일에서 이 파일을 import하신 후
// const isMobile = useMobileDetection(); 을 내부에 선언해 사용하시면 됩니다.

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const resizingHandler = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", resizingHandler);
    return () => {
      window.removeEventListener("resize", resizingHandler);
    };
  }, []);

  return isMobile;
};

export default useMobileDetection;
