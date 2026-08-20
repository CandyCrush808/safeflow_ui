from abc import ABC, abstractmethod
from typing import Generic, TypeVar

InputT = TypeVar("InputT")
OutputT = TypeVar("OutputT")


class BaseAgent(ABC, Generic[InputT, OutputT]):
    """Small async agent contract with explicit input and output types."""

    @abstractmethod
    async def run(self, input_data: InputT) -> OutputT:
        raise NotImplementedError
