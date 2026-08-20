class BackendError(Exception):
    code = "BACKEND_ERROR"

    def __init__(self, message: str) -> None:
        super().__init__(message)
        self.message = message


class NotFoundError(BackendError):
    code = "NOT_FOUND"
