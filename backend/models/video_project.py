from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
from enum import Enum

class VideoStatus(str, Enum):
    PENDING = "pending"
    PROCESSING = "processing"
    GENERATING_SCRIPT = "generating_script"
    GENERATING_IMAGES = "generating_images"
    CREATING_VIDEO = "creating_video"
    COMPLETED = "completed"
    FAILED = "failed"

class Scene(BaseModel):
    scene_number: int
    description: str
    narration: str
    image_url: Optional[str] = None
    image_prompt: str
    duration: int = 5  # Duration in seconds

class VideoProject(BaseModel):
    id: str = Field(alias="_id")
    user_id: str
    title: str
    input_text: str
    status: VideoStatus = VideoStatus.PENDING
    scenes: List[Scene] = []
    video_url: Optional[str] = None
    thumbnail_url: Optional[str] = None
    duration: int = 0  # Total duration in seconds
    created_at: datetime = Field(default_factory=lambda: datetime.now())
    updated_at: datetime = Field(default_factory=lambda: datetime.now())
    error_message: Optional[str] = None
    
    class Config:
        populate_by_name = True
        json_encoders = {datetime: lambda v: v.isoformat()}

class VideoProjectCreate(BaseModel):
    title: str
    input_text: str

class VideoProjectResponse(BaseModel):
    id: str
    user_id: str
    title: str
    status: VideoStatus
    scenes: List[Scene]
    video_url: Optional[str]
    thumbnail_url: Optional[str]
    duration: int
    created_at: datetime
    updated_at: datetime
    error_message: Optional[str] = None
