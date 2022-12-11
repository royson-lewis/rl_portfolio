const handleSuccessResponse = (
  data: unknown,
  message: string,
): {
  success: boolean;
  message: string;
  data: unknown;
} => {
  return {
    success: true,
    message,
    data,
  };
};

export default handleSuccessResponse;
