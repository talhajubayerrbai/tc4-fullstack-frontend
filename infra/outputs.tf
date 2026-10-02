output "public_ip" {
  value       = aws_lb.main.dns_name
  description = "ALB DNS name"
}

output "url" {
  value       = "http://${aws_lb.main.dns_name}"
  description = "Public URL of the frontend service"
}
