variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "service_name" {
  description = "Service name used for all resource names"
  type        = string
  default     = "tc4-frontend"
}

variable "image_tag" {
  description = "Docker image tag to deploy"
  type        = string
  default     = "latest"
}

variable "backend_url" {
  description = "tc4-backend ALB URL injected at Docker build time"
  type        = string
  default     = ""
}
