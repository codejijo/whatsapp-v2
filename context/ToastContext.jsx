import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";

const ToastContext = createContext();

export default ToastContext;

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => setToasts((prev) => prev.slice(1)), 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = useCallback(
    (toast) => {
      setToasts((prev) => [...prev, toast]);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <ToastWrapper>
        {toasts.map((tst, i) => (
          <Toast key={"toast" + i}>{tst}</Toast>
        ))}
      </ToastWrapper>
    </ToastContext.Provider>
  );
};

const useToastContext = () => [useContext(ToastContext)];

export { ToastProvider, useToastContext };

const ToastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 40px;
`;

const Toast = styled.div`
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: #fff;
  padding: 10px 20px;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  transition-property: color, background-color, border-color;
  text-transform: capitalize;
`;
