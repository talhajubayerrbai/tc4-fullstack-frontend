variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "service_name" {
  description = "Service name"
  type        = string
  default     = "tc4-frontend"
}

variable "image_tag" {
  description = "Docker image tag to deploy"
  type        = string
  default     = "latest"
}
