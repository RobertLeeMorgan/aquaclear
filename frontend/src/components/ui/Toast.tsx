interface ToastProps {
  type: "success" | "error";
  message: string;
  show: boolean;
}

export function Toast({ type, message, show }: ToastProps) {
  return (
    <div
      className={`toast toast-center z-50 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      <div
        className={`alert ${
          type === "success" ? "bg-primary text-black" : "alert-error"
        } shadow-lg`}
      >
        <span>{message}</span>
      </div>
    </div>
  );
}