import React, { createContext, useContext, useState } from "react";

// 로딩중을 표시할 파일에서 이 파일을 import 후
// const { isLoading, startLoading, stopLoading } = useLoadingContext(); 선언
// api를 불러오는 함수 내에서 try 코드 전에 startLoading() / finally 코드 안에 stopLoading() 작성
// return 문 안에서 isLoading 여부에 따라 로딩중일때 <Loading /> 컴포넌트 표시
// src\pages\serach\Photographerlist.js 참조하시면 편합니다.

const LoadingContext = createContext();

export const useLoadingContext = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
